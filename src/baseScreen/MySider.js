import { Layout, Menu } from 'antd';
import { DollarOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

function MySider() {
  return (
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
  );
}

export default MySider