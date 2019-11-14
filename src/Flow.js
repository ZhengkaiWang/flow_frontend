import React from 'react'
import App from './components/App'
import { UserContext } from './utils/User'
import { ScreenContext } from './utils/Screen'
import { BrowserRouter as Router } from "react-router-dom";
import MediaQuery from 'react-responsive'

const Flow = () =>
  <div>
    <MediaQuery minDeviceWidth={1224}>
      <ScreenContext.Provider value={{ device: "pc" }}>
        <UserContext.Provider value={{ id: 6074 }}>
          <Router basename="/flow">
            <App />
          </Router>
        </UserContext.Provider>
      </ScreenContext.Provider>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <ScreenContext.Provider value={{ device: "mobile" }}>
        <UserContext.Provider value={{ id: 6074 }}>
          <Router basename="/flow">
            <App />
          </Router>
        </UserContext.Provider>
      </ScreenContext.Provider>
    </MediaQuery>
  </div>
export default Flow