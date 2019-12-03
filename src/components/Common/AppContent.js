import React from "react";
import { Route } from "react-router-dom";
import { Layout } from 'antd'
import { ScreenContext } from '../../utils/Screen'
import { UserContext } from '../../utils/User'
import { Skeleton } from 'antd'

const SingleNews = React.lazy(() => import('../../containers/News/SingleNews'))
const News = React.lazy(() => import('../../containers/News'))
const Editor = React.lazy(() => import('../../containers/Editor'))
const Check = React.lazy(() => import('../../containers/Check'))
const Chat = React.lazy(() => import('../Chat/AdminChat'))

const AppContent = () =>
  <ScreenContext.Consumer>
    {screenContext =>
      <UserContext.Consumer>
        {userContext =>
          <Layout.Content
            style={
              screenContext.device === "mobile"
                ? { background: '#fff', padding: 18, paddingRight: 6, margin: 0 }
                : { background: '#fff', padding: 36, margin: 0 }}
          >
            <React.Suspense fallback={<Skeleton />}>
              <Route path='/news/:id' component={SingleNews} />
              <Route exact path="/" component={News} />
              <Route exact path='/news' component={News} />
              {userContext.userPermission===0
                ?<Route path='/editor/:id' component={Editor} />:null}
              {userContext.userPermission===0
                ?<Route exact path='/editor' component={Editor} />:null}
              {userContext.userPermission===0
                ?<Route exact path='/check' component={Check} />:null}
              {userContext.userPermission===0
                ?<Route exact path='/chat' component={Chat} />:null}
            </React.Suspense>
          </Layout.Content>
        }
      </UserContext.Consumer>
    }
  </ScreenContext.Consumer>

export default AppContent;