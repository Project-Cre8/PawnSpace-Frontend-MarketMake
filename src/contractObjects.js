import React, { useEffect } from "react";
import ContractData from './ContractData';

const Web3 = require("web3");

/*
Layer 2 (ContractObjects.js): This component will check if Metamask exists, then instantiate web3 (using the Metamask provider), and then instantiate a contract object for each smart contract with which our app interacts. To instantiate a contract object, we will need the ABI for each smart contract. We will have these in a separate folder. We will pass these objects (along with state from layer 1) down to layer 3.
*/

function ContractObjects({ hasMeta, maskAddress, network, unlocked, enable }) {
  const [loaded, setLoaded] = React.useState(false);
  const [web3Obj, setWeb3Obj] = React.useState({});

  useEffect(() => {
    if (hasMeta && network === "42" && unlocked) {
      // web3 instance
      const web3 = new Web3(window.web3.currentProvider);

      // create contract objects once we have contracts made

      // set web3 and other contract objects to state
      setWeb3Obj(web3);

      setLoaded(true);
    } else {
      setLoaded(true);
    }
  }, []);

  if (loaded) {
    return (
      <ContractData
        hasMeta={hasMeta}
        network={network}
        unlocked={unlocked}
        maskAddress={maskAddress}
        enable={enable}
        web3={web3Obj}
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
