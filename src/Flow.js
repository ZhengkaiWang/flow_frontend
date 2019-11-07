import React from 'react'
import App from './components/App'
import { UserContext } from './utils/User'
import { BrowserRouter as Router } from "react-router-dom";

const Flow = () => 
  <UserContext.Provider value={{id:6074}}>
    <Router>
      <App />
    </Router>
  </UserContext.Provider> 

export default Flow