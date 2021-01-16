import React, { useEffect } from "react";
import BaseScreen from './Components/baseScreen';


/*
Layer 4 (contractEvents.js): This component will house our smart contract event listeners. The events we will be listening to are TBD. We will need to listen for events from pawnSpace contracts, as well as other NFT contracts. When an event is received that results in a change in the users data (i.e. an NFT enters/leaves their inventory), the event fallback function is going to modify the data object that was created in Layer 3. This is so that we can avoid having to re-run the time-consuming process of loading NFT data from the blockchain. If user data has not yet been loaded, incoming events should not do anything.
*/

function ContractEvents({ hasMeta, network, unlocked, maskAddress, enable, web3 }) {

  // will be calling contract event listeners here
  useEffect(() => {
    
  }, []);


  return (
    <BaseScreen 
      hasMeta={hasMeta}
      network={network}
      unlocked={unlocked}
      maskAddress={maskAddress}
      enable={enable}
      web3={web3}
    />
  );
}


export default ContractEvents;
