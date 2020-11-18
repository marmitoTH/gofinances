import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/auth'
import GlobalStyles from './assets/styles/global'
import Routes from './routes'

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyles />
    </Fragment>
  )
}

export default App;
