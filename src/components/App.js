import React from "react";

import { Layout, BackTop, Skeleton, Menu } from 'antd';
import AppHeader from './Common/AppHeader'
import AppContent from './Common/AppContent'
import AppFooter from './Common/AppFooter'
import { ScreenContext } from '../utils/Screen'

import { Route, Switch } from "react-router-dom";

const Img = React.lazy(() => import('../containers/Img'))

const imgApp = () =>
  <ScreenContext.Consumer>
    {value =>
      <>
        <Layout.Header
          style={value.device === "mobile"
            ? { paddingLeft: 0 } : {}}
        >
          <Menu
            mode="horizontal"
            theme="dark"
            style={{ lineHeight: '64px' }}
            selectable={false}
          ></Menu>
        </Layout.Header>
        <Layout
          style={
            value.device === "mobile"
              ? { padding: '0px', maxWidth: '1600px', margin: 'auto', width: '100%' }
              : { padding: '24px', maxWidth: '1600px', margin: 'auto', width: '100%' }}
        >
          <Layout >
            <Layout.Content
              style={
                value.device === "mobile"
                  ? { background: '#fff', padding: 18, paddingRight: 6, margin: 0 }
                  : { background: '#fff', padding: 36, margin: 0 }}
            >
              <Img />
            </Layout.Content>
            <BackTop />
          </Layout>

          <AppFooter />
        </Layout>
      </>
    }
  </ScreenContext.Consumer>

const normalApp = () =>
  <ScreenContext.Consumer>
    {value =>
      <>
        <AppHeader />
        <Layout
          style={
            value.device === "mobile"
              ? { padding: '0px', maxWidth: '1200px', margin: 'auto', width: '100%' }
              : { padding: '24px', maxWidth: '1200px', margin: 'auto', width: '100%' }}
        >
          <Layout >
            <AppContent />
            <BackTop />
          </Layout>

          <AppFooter />
        </Layout>
      </>
    }
  </ScreenContext.Consumer>

const App = () =>
  <Layout>
    <React.Suspense fallback={<Skeleton />}>
      <Switch>
        <Route exact path='/imgclient' component={imgApp} />
        <Route path='/' component={normalApp} />
      </Switch>
    </React.Suspense>
  </Layout>


// function AppRouter() {
//   return (

//     <Layout>
//       <AppHeader />
//       <Layout style={{ padding: '24px', maxWidth: '1200px', margin: 'auto' }}>
//         <Layout >
//           <AppContent />
//           <BackTop />
//         </Layout>
//         <AppFooter />
//       </Layout>
//     </Layout>

//   );
// }

export default App