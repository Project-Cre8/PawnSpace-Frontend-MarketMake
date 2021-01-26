import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { DollarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './baseScreen.css';
import Route from './routes/Route.js'
import Offers from './routes/offers/Offers.js'

/* 
  Layout: https://ant.design/components/layout/ header sider 2
  icon assets https://ant.design/components/icon/   + 
  import { UnorderedListOutlined } from '@ant-design/icons';
*/

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


function BaseScreen({ hasMeta, network, unlocked, maskAddress, enable, web3 }) {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{
              content: 'flex',
              justifycontent: 'flex-end'
            }}
          >
            <Menu.Item key="1">Orders</Menu.Item>
            <Menu.Item key="2">Offers</Menu.Item>
            <Menu.Item key="3">Account</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Collections">
                <Menu.Item key="1">Axie Infinity</Menu.Item>
                <Menu.Item key="2">CryptoKitties</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<DollarOutlined />} title="Currencies">
                <Menu.Item key="5">ETH</Menu.Item>
                <Menu.Item key="6">wETH</Menu.Item>
                <Menu.Item key="7">DAI</Menu.Item>
                <Menu.Item key="8">USDC</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
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
              <Route path="/offers">
                <Offers />
              </Route>
              Content
        </Content>
          </Layout>
        </Layout>
      </Layout>
    </div >
  );
}

export default BaseScreen;
