import React, { Fragment } from 'react'
import { AuthProvider } from './hooks/auth'
import { toast } from 'react-toastify'
import Routes from './routes'
import GlobalStyles from './assets/styles/global'

import 'react-toastify/dist/ReactToastify.css'

toast.configure()

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
