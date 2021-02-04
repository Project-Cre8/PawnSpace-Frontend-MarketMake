import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './BaseScreen.css';

import Account from '../pages/account/Account.js';
import Index from '../pages/index/Index.js';
import OffersPage from '../pages/offers/OffersPage.js';
import MyLayout from './MyLayout.js';
import NotFound from '../pages/NotFound.js';

/* 
  Layout: https://ant.design/components/layout/ header sider 2
  icon assets https://ant.design/components/icon/   + 
  import { UnorderedListOutlined } from '@ant-design/icons';
*/

function BaseScreen({
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
  factory,
  orders,
  usdcBal,
  aBal,
  updateBalances,
}) {
  return (
    <div>
      <MyLayout>
        Content
        <Switch>
          {/* index */}
          <Route exact path="/">
            <Index />
          </Route>

          {/* offers page */}
          <Route exact path="/offers">
            <OffersPage />
          </Route>

          {/* account page */}
          <Route exact path="/account">
            <Account />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </MyLayout>
    </div>
  );
}

export default BaseScreen;
