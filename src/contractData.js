import React, { useEffect } from "react";
import ContractEvents from './ContractEvents';

/*
Layer 3 (contractData.js): This component is going to house the main logic for calling general (global variables) and user-specific smart contract data. General data will be called from a useEffect hook if Metamask exists in the browser (on every render). Depending on how much general data we will be calling, we may structure this into an object variable and set it to state (then send it down as prop).

The logic for calling user NFT data is challenging, because the more NFTs the user owns, the more calls our app needs to make. For this reason, we are going to place the logic for obtaining user NFT data into functions, and passing these down as props so that they can be called from a button click on a visual element. These functions need to stay in this layer, because the data object they will build will be passed into layer 4, which needs to have the ability to easily modify this data.
*/

function ContractData({ hasMeta, network, unlocked, maskAddress, enable, web3 }) {
  const [loaded, setLoaded] = React.useState(false);

  // will build this once we are ready to bring in contracts
  useEffect(() => {
    
  }, []);

  return (
    <ContractEvents 
      hasMeta={hasMeta}
      network={network}
      unlocked={unlocked}
      maskAddress={maskAddress}
      enable={enable}
      web3={web3}
    />
  );
}


export default ContractData;

