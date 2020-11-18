import IUser from '@/entities/IUser'

interface IAuthenticateUserResponse {
  user: IUser
  token: string
}

export default IAuthenticateUserResponse
