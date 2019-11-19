import React from "react";
import { Route } from "react-router-dom";
import { Layout } from 'antd'
import { ScreenContext } from '../../utils/Screen'
import { Skeleton } from 'antd'

const SingleNews = React.lazy(() => import('../../containers/News/SingleNews'))
const News = React.lazy(() => import('../../containers/News'))
const Editor = React.lazy(() => import('../../containers/Editor'))
const Check = React.lazy(() => import('../../containers/Check'))

const AppContent = () =>
  <ScreenContext.Consumer>
    {value =>
      <Layout.Content
        style={
          value.device === "mobile"
            ? { background: '#fff', padding: 24, margin: 0 }
            : { background: '#fff', padding: 36, margin: 0 }}
      >
        <React.Suspense fallback={<Skeleton />}>
          <Route path='/news/:id' component={SingleNews} />
          <Route exact path="/" component={News} />
          <Route exact path='/news' component={News} />
          <Route path='/editor/:id' component={Editor} />
          <Route exact path='/editor' component={Editor} />
          <Route exact path='/check' component={Check} />
        </React.Suspense>
      </Layout.Content>
    }
  </ScreenContext.Consumer>

export default AppContent;