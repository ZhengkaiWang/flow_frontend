import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd'
import { ScreenContext } from '../../utils/Screen'
import { UserContext } from '../../utils/User'

const notification = params =>
  params === 'notification'
    ? Notification.permission === "granted"
      ? console.log('Welcome to VMP@HZ!')
      : Notification.requestPermission(permission =>
        permission === "granted"
          ? new Notification("Thx for granting! Welcome to VMP FLOW!")
          : null)
    : null

class AppHeader extends React.Component {
  componentDidMount() {
    notification('notification')
  }
  render() {
    return (
      <ScreenContext.Consumer>
        {context =>
          <UserContext.Consumer>
            {userContext =>
              <Layout.Header
                style={context.device === "mobile"
                  ? { paddingLeft: 0 } : {}}
              >
                <Menu
                  mode="horizontal"
                  theme="dark"
                  style={{ lineHeight: '64px' }}
                  selectable={false}
                >
                  <Menu.Item key="news">
                    <NavLink to="/news/">
                      <Icon type="stock" />
                      News
                 </NavLink>
                  </Menu.Item>
                  {
                    userContext.userPermission === 0
                      ? <Menu.Item key="editor">
                        <NavLink to="/editor/">
                          <Icon type="edit" />
                          编辑
                        </NavLink>
                      </Menu.Item>
                      : null
                  }
                  {
                    userContext.userPermission === 0
                      ? <Menu.Item key="check">
                        <NavLink to="/check/">
                          <Icon type="check-square" />
                          审核
                        </NavLink>
                      </Menu.Item>
                      : null
                  }
                  {
                    userContext.userPermission === 0
                      ? <Menu.Item key="chat">
                        <NavLink to="/chat/">
                          <Icon type="message" />
                          聊天后台
                        </NavLink>
                      </Menu.Item>
                      : null
                  }
                </Menu>
              </Layout.Header>
            }
          </UserContext.Consumer>
        }
      </ScreenContext.Consumer>

    )
  }


}
export default AppHeader;