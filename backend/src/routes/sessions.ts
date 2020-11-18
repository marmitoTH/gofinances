import { Router } from 'express'
import { authenticateUserController } from '@/services/AuthenticateUser'

const router = Router()

router.post('/', (request, response) => {
  return authenticateUserController.handle(request, response)
})

export default router
