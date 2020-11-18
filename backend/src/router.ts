import { Router } from 'express'
import users from './routes/users'
import sessions from './routes/sessions'
import transactions from './routes/transactions'

const router = Router()

router.use('/users', users)
router.use('/transactions', transactions)
router.use('/sessions', sessions)

export default router
