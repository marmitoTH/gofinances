import React from 'react'
import { useAuth } from '../hooks/auth'

import {
  RouteProps as DOMRouteProps,
  Route as DOMRoute, Redirect
} from 'react-router-dom'

interface IRouteProps extends DOMRouteProps {
  isPrivate?: boolean
  redirectTo: string
  component: React.ComponentType
}

function Route({
  isPrivate = false,
  redirectTo,
  component: Component,
  ...rest
}: IRouteProps) {
  const { user } = useAuth()
  return (
    <DOMRoute {...rest} render={() => {
      if (isPrivate === !!user) {
        return <Component />
      }

      return <Redirect to={{ pathname: redirectTo }} />
    }} />
  )
}

export default Route
