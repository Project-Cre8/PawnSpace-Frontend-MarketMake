import React, { useEffect } from 'react';
import ContractEvents from './ContractEvents.js';

const axios = require('axios');

/*
Layer 3 (contractData.js): This component is going to house the main logic for calling general (global variables) and user-specific smart contract data. General data will be called from a useEffect hook if Metamask exists in the browser (on every render). Depending on how much general data we will be calling, we may structure this into an object variable and set it to state (then send it down as prop).

The logic for calling user NFT data is challenging, because the more NFTs the user owns, the more calls our app needs to make. For this reason, we are going to place the logic for obtaining user NFT data into functions, and passing these down as props so that they can be called from a button click on a visual element. These functions need to stay in this layer, because the data object they will build will be passed into layer 4, which needs to have the ability to easily modify this data.
*/

function ContractData({
  hasMeta,
  network,
  unlocked,
  maskAddress,
  enable,
  web3,
  sendOrder,
  sendOffer,
  sendPayback,
  sendWithdraw,
}) {
  // const [loaded, setLoaded] = React.useState(false);
  const [factoryData, setFactoryData] = React.useState({});
  const [orderData, setOrderData] = React.useState([]);
  // will build this once we are ready to bring in contracts
  useEffect(() => {
    const getData = () => {
      axios
        .post('https://api.thegraph.com/subgraphs/name/project-cre8/pawnspace-kovan', {
          query: `{
          factories(first: 5) {
            id
            spaceCount
            spaces {
              id
            }
          }
          spaces(first: 5) {
            id
            nftAddress
            nftName
            nftSymbol
            orders {
              id
            }
          }
          orders {
            id
            owner
            tokenIds
            requestAmount
            interest
            period
            additionalCollateral
            offeror
            createdAt
            offeredAt
            paidBackAt
            withdrewAt
            space {
              id
              nftAddress
            }
          }
        }`,
        })
        .then((response) => {
          console.log(response);
          const factoryInfo = {
            factoryAddr: response.data.data.factories[0].id,
            totalSpaces: response.data.data.factories[0].spaceCount,
          };

          let spaces = [];
          // creates template database from unique space addresses
          // array of spaces
          for (let i = 0; i < response.data.data.spaces.length; i++) {
            let spaceTemplate = {
              name: '',
              spaceAddr: response.data.data.spaces[i].id,
              nftAddr: response.data.data.spaces[i].nftAddress,
              nftName: response.data.data.spaces[i].nftName,
              nftSymbol: response.data.data.spaces[i].nftSymbol,
              orders: [],
            };
            spaces.push(spaceTemplate);
          }

          // loop through Orders, and place each one in corresponding space object
          for (let k = 0; k < response.data.data.orders.length; k++) {
            let orderSpaceAddr = response.data.data.orders[k].space.id;
            for (let j = 0; j < spaces.length; j++) {
              if (spaces[j].spaceAddr.toUpperCase() === orderSpaceAddr.toUpperCase()) {
                let orderToPush = response.data.data.orders[k];
                orderToPush.additionalCollateral /= 10 ** 6;
                orderToPush.interest /= 10 ** 6;
                orderToPush.requestAmount /= 10 ** 6;
                spaces[j].orders.push(response.data.data.orders[k]);
                break;
              }
            }
          }

          setFactoryData(factoryInfo);
          setOrderData(spaces);

          console.log(factoryInfo);
          console.log(spaces);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getData();
    let timer = setInterval(() => {
      getData();
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ContractEvents
      hasMeta={hasMeta}
      network={network}
      unlocked={unlocked}
      maskAddress={maskAddress}
      enable={enable}
      web3={web3}
      factory={factoryData}
      orders={orderData}
      sendOrder={sendOrder}
      sendOffer={sendOffer}
      sendPayback={sendPayback}
      sendWithdraw={sendWithdraw}
    />
  );
}

export default ContractData;
