import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import './BaseScreen.css';

import Account from '../pages/account/Account.js';
import Index from '../pages/index/Index.js';
import OffersPage from '../pages/offers/OffersPage.js';
import MyLayout from './MyLayout.js';
import NotFound from '../pages/NotFound.js'

/* 
  Layout: https://ant.design/components/layout/ header sider 2
  icon assets https://ant.design/components/icon/   + 
  import { UnorderedListOutlined } from '@ant-design/icons';
*/

function BaseScreen({ hasMeta, network, unlocked, tokenIDList, mintAToken, maskAddress, enable, getUserNFT, web3, sendOrder, sendOffer, sendPayback, sendWithdraw, factory, orders, usdcBal, aBal, updateBalances, mintNFT, mintERC20 }) {
  const [IDList, setIDList] = React.useState("");
  const [tokenID, setTokenID] = React.useState("");
  const [askAmt, setAskAmt] = React.useState("");

  useEffect(() => {
    let IDs = ""
    if (tokenIDList.length > 0) {
      for (let i = 0; i <tokenIDList.length; i++) {
        IDs = IDs + tokenIDList[i] + ", ";
      }
    }
    setIDList(IDs);
  }, [tokenIDList])

  const changeTokenID = (event) => {
    setTokenID(event.target.value);
  }

  const changeAskAmt = (event) => {
    setAskAmt(event.target.value);
  }
  
  return (
    <div>
      <MyLayout>

        Content
        <Switch>
          {/* index */}
          <Route exact path="/">
            {/* <Index /> */}
            <div className="mainBox">
              <button onClick={enable}> Enable Metamask</button>
              <div>{maskAddress}</div>
            </div>
            <div className="mintNFTBox">
              <button onClick={mintNFT}>MINT NFT</button>
              <button onClick={getUserNFT}>PULL TOKEN ID's</button>
              <div>{IDList}</div>
            </div>
            <div className="erc20Box">
              <button onClick={mintERC20}>MINT ERC20</button>
              <button onClick={updateBalances}> UPDATE BALANCES</button>
              <div>{usdcBal}</div>
            </div>
            <div className="erc20Box">
              <button onClick={mintAToken}>MINT aToken</button>
              <button onClick={updateBalances}> UPDATE BALANCES</button>
              <div>{aBal}</div>
            </div>
            <div className="createOrderBox">
              <input onChange={changeTokenID} placeholder="Enter Token ID"></input>
              <input onChange={changeAskAmt} placeholder="Enter Amount of USDC to request"></input>
              <button onClick={() => sendOrder(tokenID, askAmt, 2010101)} >Create Order</button>
            </div>
          </Route>

          {/* offers page */}
          <Route exact path="/offers">
            <OffersPage orders={orders}/>
          </Route>

          {/* account page */}
          <Route exact path="/account">
            <Account />
          </Route>

          <Route component={NotFound} />
        </Switch>

      </MyLayout>
    </div >
  );
}

export default BaseScreen;
