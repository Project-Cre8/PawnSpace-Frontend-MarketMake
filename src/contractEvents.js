import React, { useEffect } from "react";
import BaseScreen from './baseScreen/BaseScreen.js';

const aUSDCABI = require('./ABI/aUSDC.js');
const erc20ABI = require("./ABI/erc20.js");
/*
Layer 4 (contractEvents.js): This component will house our smart contract event listeners. The events we will be listening to are TBD. We will need to listen for events from pawnSpace contracts, as well as other NFT contracts. When an event is received that results in a change in the users data (i.e. an NFT enters/leaves their inventory), the event fallback function is going to modify the data object that was created in Layer 3. This is so that we can avoid having to re-run the time-consuming process of loading NFT data from the blockchain. If user data has not yet been loaded, incoming events should not do anything.
*/
const aUSDCAddr = "0xe12AFeC5aa12Cf614678f9bFeeB98cA9Bb95b5B0";
const USDCAddr = "0xe22da380ee6B445bb8273C81944ADEB6E8450422";

function ContractEvents({ hasMeta, network, unlocked, maskAddress, enable, web3, sendOrder, sendOffer, sendPayback, sendWithdraw, orders, factory }) {
  const [usdcBal, setUSDCBal] = React.useState(0);
  const [aUsdcBal, setAUsdcBal] = React.useState(0);


  // will be calling contract event listeners here
  useEffect(() => {
    console.log(unlocked);
    console.log(web3);
    const getBalances = async () => {
      const aContract = new web3.eth.Contract(aUSDCABI, aUSDCAddr);
      const usdcContract = new web3.eth.Contract(erc20ABI, USDCAddr);

      const getABal = aContract.methods.balanceOf(maskAddress); 
      const aBal = await getABal.call();
      
      const getUsdcBal = usdcContract.methods.balanceOf(maskAddress);
      const USDC = await getUsdcBal.call();

      console.log(USDC);
      console.log(aBal);
      setUSDCBal(USDC / (10 ** 6));
      setAUsdcBal(aBal / (10 ** 6));
    }
    if (unlocked && typeof web3.eth !== "undefined") {
      getBalances();
    }
    
  }, [web3, unlocked, maskAddress]);

  const updateBalances = async () => {
    if (typeof web3.eth !== "undefined" && unlocked) {
      const aContract = new web3.eth.Contract(aUSDCABI, aUSDCAddr);
      const usdcContract = new web3.eth.Contract(erc20ABI, USDCAddr);

      const getABal = aContract.methods.balanceOf(maskAddress); 
      const aBal = await getABal.call();
      
      const getUsdcBal = usdcContract.methods.balanceOf(maskAddress);
      const USDC = await getUsdcBal.call();

      console.log(USDC);
      console.log(aBal);
      setUSDCBal(USDC / (10 ** 6));
      setAUsdcBal(aBal / (10 ** 6));
    }
  }

  return (
    <BaseScreen 
      hasMeta={hasMeta}
      network={network}
      unlocked={unlocked}
      maskAddress={maskAddress}
      enable={enable}
      web3={web3}
      orders={orders}
      factory={factory}
      sendOrder={sendOrder}
      sendOffer={sendOffer}
      sendPayback={sendPayback}
      sendWithdraw={sendWithdraw}
      usdcBal={usdcBal}
      aBal={aUsdcBal}
      updateBalances={updateBalances}
    />
  );
}


export default ContractEvents;
