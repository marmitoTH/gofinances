import React, { Fragment } from 'react'
import { AuthProvider } from './hooks/auth'
import GlobalStyles from './assets/styles/global'
import Routes from './routes'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyles />
    </Fragment>
  )
}

export default App;
