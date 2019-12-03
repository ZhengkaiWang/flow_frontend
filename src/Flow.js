import React from 'react'
import App from './components/App'
import { UserContext } from './utils/User'
import { ScreenContext } from './utils/Screen'
import { loginApi } from './utils/api'
import { BrowserRouter as Router } from "react-router-dom";
import MediaQuery from 'react-responsive'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';

class Flow extends React.Component {

  state = { flow: '' }

  componentDidMount() {
    loginApi.login({}, rspData => {
      const id = rspData.id === 'unlogin' ? 9999 : Number(rspData.id)
      const name = rspData.name === 'unlogin' ? '游客' : String(rspData.name)
      const flow = <UserContext.Provider value={{ userID: id, userName: name, userPermission: rspData.permission }}>
        <Router basename="/flow">
          <App />
        </Router>
      </UserContext.Provider>
      this.setState({ flow: flow })
    })
  }

  render() {
    return (
        <ConfigProvider locale={zhCN}>
          <MediaQuery minDeviceWidth={1224}>
            <ScreenContext.Provider value={{ device: "pc" }}>
              {this.state.flow}
            </ScreenContext.Provider>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>
            <ScreenContext.Provider value={{ device: "mobile" }}>
              {this.state.flow}
            </ScreenContext.Provider>
          </MediaQuery>
        </ConfigProvider>
    )
  }

}

export default Flow