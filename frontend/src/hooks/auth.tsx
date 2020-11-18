import React, { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

interface IAuthContext {
  user: object
  token: string

  signIn(credentials: ISignInCredentials): Promise<void>
  signOut(): void
}

interface IAuthProviderProps {
  children: React.ReactNode
}

interface ISignInCredentials {
  email: string
  password: string
}

interface IAuthState {
  token: string
  user: object
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

function AuthProvider({ children }: IAuthProviderProps) {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@gofinances/token')
    const user = localStorage.getItem('@gofinances/user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as IAuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password })
    const { token, user } = response.data

    localStorage.setItem('@gofinances/token', token)
    localStorage.setItem('@gofinances/user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@gofinances/token')
    localStorage.removeItem('@gofinances/user')

    setData({} as IAuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
