import React from "react";

import { Layout, BackTop } from 'antd';
import AppHeader from './Common/AppHeader'
import AppContent from './Common/AppContent'
import AppFooter from './Common/AppFooter'
import { ScreenContext } from '../utils/Screen'

const App = () =>
  <ScreenContext.Consumer>
    {value =>
      <Layout>
        <AppHeader />
        <Layout
          style={
            value.device === "mobile"
              ? { padding: '0px', maxWidth: '1200px', margin: 'auto' }
              : { padding: '24px', maxWidth: '1200px', margin: 'auto' }}
        >
          <Layout >
            <AppContent />
            <BackTop />
          </Layout>
          <AppFooter />
        </Layout>
      </Layout>
    }
  </ScreenContext.Consumer>

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