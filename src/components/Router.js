import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import NotFound from './404'
import { routes } from '../routes'

function AppRouter () {
  return (
    <>
      <Router>
        <>
          <div
            style={{
              height: 30,
              padding: '0 5px',
              marginBottom: 5,
              backgroundColor: 'rgba(0, 0, 0, .1)',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Link to='/'>To Main Page</Link>
            <Link to='/users'>To User Management Page</Link>
            <Link to='/invalidPath'>To 404 Page</Link>
          </div>
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
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
    </>
  )
}

export default AppRouter
