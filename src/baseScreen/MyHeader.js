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
        <Menu.Item key="home">
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="offers">
          <Link to='/offers'>Offers</Link>
        </Menu.Item>
        <Menu.Item key="account">
          <Link to='/account'>Account</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default MyHeader;