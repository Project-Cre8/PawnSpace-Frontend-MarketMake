import React, { useEffect } from "react";
import '../App.css';

function BaseScreen({ hasMeta, network, unlocked, maskAddress, enable, web3 }) {



  // we can start building UI here.
  return (
    <div>
      WE CAN START BUILDING UI HERE 
      <button onClick={enable}>TEST UNLOCK</button>
      {maskAddress}
    </div>
  );
}


export default BaseScreen;
