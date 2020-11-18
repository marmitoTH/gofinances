import { NextFunction, Request, Response } from 'express'
import authConfig from '@/config/auth'
import { verify } from 'jsonwebtoken'

interface Payload {
  iat: number,
  exp: number,
  sub: string
}

function auth(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json()
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    const { sub } = decoded as Payload

    request.user = {
      id: parseInt(sub)
    }

    return next()
  } catch {
    return response.status(401).json()
  }
}

export default auth
