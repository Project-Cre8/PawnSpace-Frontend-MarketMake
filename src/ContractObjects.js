import React, { useEffect } from 'react';
import ContractData from './ContractData.js';

const Web3 = require('web3');

const pawnSpace = require("./ABI/PawnSpace.json");
// const pawnFactory = require("./ABI/PawnFactory.json");
const NFTABI = require("./ABI/ERC721.json");
const erc20ABI = require("./ABI/ERC20.json");
const aTokenABI = require("./ABI/ARC20.json");

const NFTAddress = "0xB57f33633232577F2f2cFE2879eDf89Df0FE3Cf3";
const USDCAddress = "0xe22da380ee6B445bb8273C81944ADEB6E8450422";
const aTokenAddr = "0xe12AFeC5aa12Cf614678f9bFeeB98cA9Bb95b5B0";
const pawnSpaceAddr = "0x6467E8d64417659f8631cbF4A420BA5eF9533442";
// const pawnFactoryAddr = "0xB2Dfc879659F94B4f2110983cB0525374d60512E";
/*
Layer 2 (ContractObjects.js): This component will check if Metamask exists, then instantiate web3 (using the Metamask provider), and then instantiate a contract object for each smart contract with which our app interacts. To instantiate a contract object, we will need the ABI for each smart contract. We will have these in a separate folder. We will pass these objects (along with state from layer 1) down to layer 3.
*/

function ContractObjects({ hasMeta, maskAddress, network, unlocked, enable }) {
  const [loaded, setLoaded] = React.useState(false);
  const [web3Obj, setWeb3Obj] = React.useState({});
  const [tokenIDList, setTokenIDList] = React.useState([]);

  useEffect(() => {
    if (hasMeta && network === '42' && unlocked) {
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

  const getUserNFT = async () => {
    
    const NFT = new web3Obj.eth.Contract(NFTABI.abi, NFTAddress);
    let userBal = NFT.methods.balanceOf(maskAddress);
    let getUserBal = await userBal.call();
    
    let tokens = []
    if (getUserBal > 0) {
      for (let i = 0; i < getUserBal; i++) {
        let tokenByIndex = NFT.methods.tokenOfOwnerByIndex(maskAddress, i);
        let getTokenID = await tokenByIndex.call();
        tokens.push(getTokenID);
      }
    }
    setTokenIDList(tokens);

  }

  const mintERC20 = async () => {
    const erc20 = new web3Obj.eth.Contract(erc20ABI.abi, USDCAddress);
    console.log(erc20.methods)
    let minting = erc20.methods.mint(20000000000);
    await minting.send({ from: maskAddress});
  }

  const mintAToken = async () => {
    const erc20 = new web3Obj.eth.Contract(aTokenABI.abi, aTokenAddr);
    console.log(erc20.methods)
    let minting = erc20.methods.mint(maskAddress, 20000000000, 1);
    await minting.send({ from: maskAddress});
  }

  const mintNFT = async () => {
    console.log(web3Obj);
    const NFT = new web3Obj.eth.Contract(NFTABI.abi, NFTAddress);
    let makeNew = NFT.methods.mint(maskAddress);
    let newNFT = await makeNew.send({from: maskAddress});
    return newNFT;
  }

  const getNFTName = async () => {
    const NFT = new web3Obj.eth.Contract(NFTABI.abi, NFTAddress);
    let name = NFT.methods.name();
    let data = await name.call();
    return data;
  };

  const sendOrder = async (tokenIDs, requestAmt, period) => {
    console.log(1)
    const space = new web3Obj.eth.Contract(pawnSpace.abi);
    space.options.address = pawnSpaceAddr;
    let order = space.methods.order([parseInt(tokenIDs)], parseInt(requestAmt), period, );
    console.log(order);
    await order.send({from: maskAddress});
  }

  const sendOffer = async (orderID) => {
    const space = new web3Obj.eth.Contract(pawnSpace.abi);
    space.options.address = pawnSpaceAddr;
    let order = space.methods.offer(orderID)
    await order.send({from: maskAddress});
  }

  const sendPayback = async (orderID) => {
    const space = new web3Obj.eth.Contract(pawnSpace.abi);
    space.options.address = pawnSpaceAddr;
    let order = space.methods.payback(orderID)
    await order.send({from: maskAddress});
  }

  const sendWithdraw = async (orderID) => {
    const space = new web3Obj.eth.Contract(pawnSpace.abi);
    space.options.address = pawnSpaceAddr;
    let order = space.methods.withdraw(orderID)
    await order.send({from: maskAddress});
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
        getUserNFT={getUserNFT}
        getNFTName={getNFTName}
        sendOrder={sendOrder}
        sendOffer={sendOffer}
        sendPayback={sendPayback}
        sendWithdraw={sendWithdraw}
        mintNFT={mintNFT}
        mintERC20={mintERC20}
        tokenIDList={tokenIDList}
        mintAToken={mintAToken}
      />
    );
  } else {
    return <div>LOADING PLACEHOLDER</div>;
  }
}

export default ContractObjects;
