import React from "react";
import { Route } from "react-router-dom";
import { Layout } from 'antd'

import SingleNews from '../../containers/News/SingleNews'
import News from '../../containers/News'
import Editor from '../../containers/Editor'
import CheckContainer from "../../containers/Check";


const AppContent = () => 

  <Layout.Content
    style={{
    background: '#fff',
    padding: 36,
    margin: 0,
    }}
  >
    <Route path='/news/:id' component={SingleNews}></Route>
    <Route exact path="/" component={News} />
    <Route exact path='/news' component={News} />
    
    <Route path='/editor' component={Editor} />
    <Route path='/check' component={CheckContainer} />
  </Layout.Content>

export default AppContent;