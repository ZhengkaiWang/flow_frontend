import React from "react";
import { Route } from "react-router-dom";
import { Layout } from 'antd'
import { ScreenContext } from '../../utils/Screen'
import SingleNews from '../../containers/News/SingleNews'
import News from '../../containers/News'
import Editor from '../../containers/Editor'
import CheckContainer from "../../containers/Check";

class AppContent extends React.Component {
  static contextType = ScreenContext;
  render() {
    console.log(this.context)
    return (
      <Layout.Content
        style={
          this.context.device==="mobile"
          ?{ background: '#fff',padding: 24,margin: 0 }
          :{ background: '#fff',padding: 36,margin: 0 }}
      >
        <Route path='/news/:id' component={SingleNews} />
        <Route exact path="/" component={News} />
        <Route exact path='/news' component={News} />
        <Route path='/editor/:id' component={Editor} />
        <Route exact path='/editor' component={Editor} />
        <Route exact path='/check' component={CheckContainer} />
      </Layout.Content>
    )
  }
}


// const AppContent = () => 

//   <Layout.Content
//     style={{
//     background: '#fff',
//     padding: 36,
//     margin: 0,
//     }}
//   >
//     <Route path='/news/:id' component={SingleNews} />
//     <Route exact path="/" component={News} />
//     <Route exact path='/news' component={News} />
//     <Route path='/editor/:id' component={Editor} />
//     <Route exact path='/editor' component={Editor} />
//     <Route exact path='/check' component={CheckContainer} />
//   </Layout.Content>

export default AppContent;