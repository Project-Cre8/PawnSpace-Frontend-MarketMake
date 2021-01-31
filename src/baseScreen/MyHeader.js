import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';


const { Header } = Layout;

function MyHeader() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[]}
        style={{
          content: 'flex',
          justifycontent: 'flex-end'
        }}
      >
        <Menu.Item key="dashboard">
          <Link to='/'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="explore">
          <Link to='/'>Explore</Link>
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to='/'>Orders</Link>
        </Menu.Item>
        <Menu.Item key="offers">
          <Link to='/offers'>Offers</Link>
        </Menu.Item>
        <Menu.Item key="create-loan">
          <Link to='/'>Create Loan</Link>
        </Menu.Item>
        <Menu.Item key="MetaMask">
          <Link to='/'>0xb111...</Link>
        </Menu.Item>
        <Menu.Item key="account">
          <Link to='/account'>Account</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default MyHeader;