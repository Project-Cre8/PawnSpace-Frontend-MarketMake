import React, { useEffect } from "react";
import ContractData from './contractData.js';

const Web3 = require("web3");

const pawnSpace = require("./ABI/PawnSpace.json");
const pawnFactory = require("./ABI/PawnFactory.json");
const NFTABI = require("./ABI/ERC721.json");

/*
Layer 2 (ContractObjects.js): This component will check if Metamask exists, then instantiate web3 (using the Metamask provider), and then instantiate a contract object for each smart contract with which our app interacts. To instantiate a contract object, we will need the ABI for each smart contract. We will have these in a separate folder. We will pass these objects (along with state from layer 1) down to layer 3.
*/

function ContractObjects({ hasMeta, maskAddress, network, unlocked, enable }) {
  const [loaded, setLoaded] = React.useState(false);
  const [web3Obj, setWeb3Obj] = React.useState({});

  useEffect(() => {
    if (hasMeta && network === "42" && unlocked) {
      console.log(hasMeta, network, unlocked);
      const web3 = new Web3(window.web3.currentProvider);

      // create contract objects once we have contracts made

      // set web3 and other contract objects to state
      setWeb3Obj(web3);

      setLoaded(true);
    } else {
      setLoaded(true);
    }
  }, [hasMeta, network, unlocked]);

  const getNFTName = async (NFTAddr) => {
    const NFT = new web3Obj.eth.Contract(NFTABI.abi, NFTAddr);
    let name = NFT.methods.name();
    let data = await name.call();
    return data;
  }

  const sendOrder = async (contract, tokenIDs, requestAmt, period) => {
    const space = new web3Obj.eth.Contract(pawnSpace.abi);
    space.options.address = contract;

    await space.methods.order(tokenIDs, requestAmt, period).send();
  }

  const sendOffer = async (contract, orderID) => {
    const space = new web3Obj.eth.Contract(pawnSpace.abi);
    space.options.address = contract;

    await space.methods.offer(orderID).send();
  }

  const sendPayback = async (contract, orderID) => {
    const space = new web3Obj.eth.Contract(pawnSpace.abi);
    space.options.address = contract;

    await space.methods.payback(orderID).send();
  }

  const sendWithdraw = async (contract, orderID) => {
    const space = new web3Obj.eth.Contract(pawnSpace.abi);
    space.options.address = contract;

    await space.methods.withdraw(orderID).send();
  }

  if (loaded) {
    return (
      <ContractData
        hasMeta={hasMeta}
        network={network}
        unlocked={unlocked}
        maskAddress={maskAddress}
        enable={enable}
        web3={web3Obj}
        sendOrder={sendOrder}
        sendOffer={sendOffer}
        sendPayback={sendPayback}
        sendWithdraw={sendWithdraw}
      />
    );
  } else {
    return (
      <div>
        LOADING PLACEHOLDER
      </div>
    )
  }

}


export default ContractObjects;
