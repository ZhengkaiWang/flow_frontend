import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd'
import { ScreenContext } from '../../utils/Screen'

const notification = params =>
  params.key === 'notification'
    ? Notification.permission === "granted"
      ? new Notification("Welcome to VMP FLOW!")
      : Notification.requestPermission(permission =>
        permission === "granted"
          ? new Notification("Thx for granting! Welcome to VMP FLOW!")
          : null)
    : null



class AppHeader extends React.Component {

  static contextType = ScreenContext

  render() {
    return (
      <Layout.Header 
      style={this.context.device==="mobile"
          ?{paddingLeft: 24}:{}}>
        <Menu
          onClick={notification}
          selectedKeys={[]}
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}
        >

          {/* <Menu.Item key="home">
        <NavLink to="/">
          <Icon type="home" />
          Home
          </NavLink>
      </Menu.Item> */}

          <Menu.Item key="news">
            <NavLink to="/news/">
              <Icon type="stock" />
              News
          </NavLink>
          </Menu.Item>
          <Menu.Item key="editor">
            <NavLink to="/editor/">
              <Icon type="edit" />
              编辑
          </NavLink>
          </Menu.Item>
          <Menu.Item key="check">
            <NavLink to="/check/">
              <Icon type="check-square" />
              审核
          </NavLink>
          </Menu.Item>
          {/* <Menu.SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            管理
            </span>
        }
      >
        <Menu.ItemGroup title="后台管理">
          <Menu.Item key="editor">
            <NavLink to="/editor/">
              <Icon type="edit" />
              编辑文章
              </NavLink>
          </Menu.Item>
          <Menu.Item key="check">
            <NavLink to="/check/">
              <Icon type="check-square" />
              审核文章
              </NavLink>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup title="Others">
          <Menu.Item key="notification">授权通知</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu> */}

        </Menu>
      </Layout.Header>

    )
  }


}
export default AppHeader;