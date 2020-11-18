import React from 'react'

import {
  Switch,
  BrowserRouter as Router,
  Route as DOMRoute,
  RouteProps
} from 'react-router-dom'

import Navbar from '../components/Navbar'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import Add from '../pages/Add'
import Import from '../pages/Import'
import Route from './Route'

function Routes() {
  function NavRoute({ exact, path, component }: RouteProps) {
    return (
      <DOMRoute exact={exact} path={path}>
        <Navbar
          expand={false}
          options={[{
            title: 'Listagem',
            link: '/dashboard',
            expand: true
          }, {
            title: 'Cadastrar',
            link: '/add'
          }, {
            title: 'Importar',
            link: '/import'
          }]}
        />
        <Route
          component={component as React.ComponentType}
          isPrivate
          redirectTo='/'
        />
      </DOMRoute>
    )
  }

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={SignIn}
          redirectTo='/dashboard'
        />
        <Route
          path='/register'
          component={SignUp}
          redirectTo='/dashboard'
        />
        <NavRoute
          path='/dashboard'
          component={Dashboard}
        />
        <NavRoute
          path='/add'
          component={Add}
        />
        <NavRoute
          path='/import'
          component={Import}
        />
      </Switch>
    </Router>
  )
}

export default Routes
