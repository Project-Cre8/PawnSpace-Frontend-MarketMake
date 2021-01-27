import React, { useEffect } from "react";
import { Route } from 'react-router-dom';

import './BaseScreen.css';

import Account from '../pages/account/Account.js';
import Index from '../pages/index/Index.js';
import Offers from '../pages/offers/Offers.js';
import MyLayout from './MyLayout.js';

/* 
  Layout: https://ant.design/components/layout/ header sider 2
  icon assets https://ant.design/components/icon/   + 
  import { UnorderedListOutlined } from '@ant-design/icons';
*/

function BaseScreen({ hasMeta, network, unlocked, maskAddress, enable, web3, sendOrder, sendOffer, sendPayback, sendWithdraw, factory, orders }) {
  return (
    <div>
      <MyLayout hasMeta={hasMeta}
        network={network}
        unlocked={unlocked}
        maskAddress={maskAddress}
        enable={enable}
        web3={web3}
      >

        Content
         {/* index */}
        <Route exact path="/">
          <Index />
        </Route>

        {/* offers page */}
        <Route exact path="/offers">
          <Offers />
        </Route>

        {/* account page */}
        <Route exact path="/account">
          <Account />
        </Route>

      </MyLayout>
    </div >
  );
}

export default BaseScreen;
