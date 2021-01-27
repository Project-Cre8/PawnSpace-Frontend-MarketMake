import React, { useEffect } from "react";
import { BrowserRouter, Route } from 'react-router-dom'

import { Layout, Menu } from 'antd';

import Offers from '../pages/offers/Offers.js'
import MySider from "./MySider.js";
import MyHeader from "./MyHeader.js";

const { Content } = Layout;

function MyLayout({ hasMeta, network, unlocked, maskAddress, enable, web3, children }) {
  return (
    <Layout>
      <BrowserRouter>
        <MyHeader />
        <Layout>

          {/* sider lives on offers page */}
          <Route path="/offers">
            <MySider />
          </Route>

          <Layout style={{ padding: '24px 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}

            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
}


export default MyLayout;