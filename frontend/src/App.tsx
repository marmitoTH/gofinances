import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import GlobalStyles from './assets/styles/global'
import Navbar from './components/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Add from './pages/Add'
import Import from './pages/Import'

function App() {
  function NavRoute({ exact, path, component }: RouteProps) {
    return (
      <Route exact={exact} path={path}>
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
        <Route component={component} />
      </Route>
    )
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={SignIn}
          />
          <Route
            path='/register'
            component={SignUp}
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
      </BrowserRouter>
      <GlobalStyles />
    </Fragment>
  )
}

export default App;
