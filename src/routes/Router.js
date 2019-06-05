import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AnchorButton from '../components/anchor/index'
import { routes, route404 } from './index'

function AppRouter () {
  return (
    <>
      <Router>
        <>
          <AnchorButton routes={routes} route404={route404} />
          <Switch>
            {routes.map((route, index) => {
              const { path, exact, component } = route
              return (
                <Route
                  key={index.toString()}
                  exact={exact}
                  path={path}
                  component={component}
                />
            )})}
            <Route component={route404.component} />
          </Switch>
        </>
      </Router>
    </>
  )
}

export default process.env.NODE_ENV === 'development' ? hot(AppRouter) : AppRouter
