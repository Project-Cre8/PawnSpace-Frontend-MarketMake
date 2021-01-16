import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './baseScreen.css'
import Sider from './sider.js';

const { Header, Content } = Layout;

function BaseScreen({ hasMeta, network, unlocked, maskAddress, enable, web3 }) {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>

          <Sider width={200} className="site-layout-background" />

          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div>
                WE CAN START BUILDING UI HERE
                <button onClick={enable}>TEST UNLOCK</button>
                {maskAddress}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div >
  );
}

export default BaseScreen;
