import React from 'react'
import App from './components/App'
import { UserContext } from './utils/User'
import { ScreenContext } from './utils/Screen'
import { loginApi } from './utils/api'
import { BrowserRouter as Router } from "react-router-dom";
import MediaQuery from 'react-responsive'

class Flow extends React.Component {

  state = {
    id:1,
    name: "超级管理员"
  }

  componentDidMount() {
    loginApi.login({},rspData=> {
      const id=rspData.id==='unlogin'?1:Number(rspData.id)
      const name=rspData.name===''?'超级管理员':String(rspData.name)
      this.setState({id: id, name: name})
    })
  }

  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <ScreenContext.Provider value={{ device: "pc" }}>
            <UserContext.Provider value={{ userID: this.state.id, userName: this.state.name }}>
              <Router basename="/flow">
                <App />
              </Router>
            </UserContext.Provider>
          </ScreenContext.Provider>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <ScreenContext.Provider value={{ device: "mobile" }}>
            <UserContext.Provider value={{ userID: this.state.id, userName: this.state.name }}>
              <Router basename="/flow">
                <App />
              </Router>
            </UserContext.Provider>
          </ScreenContext.Provider>
        </MediaQuery>
      </div>
    )
  }

}

export default Flow