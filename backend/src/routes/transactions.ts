import { Router } from 'express'
import fileUpload from '../middlewares/fileUpload'
import auth from '../middlewares/auth'

import { importTransactionsController } from '../services/ImportTransactions'
import { indexTransactionsController } from '../services/IndexTransactions'
import { createTransactionController } from '../services/CreateTransaction'
import { deleteTransactionController } from '@/services/DeleteTransaction'

const router = Router()

router.use(auth)

router.get('/', (request, response) => {
  return indexTransactionsController.handle(request, response)
})

router.get('/take/:take/skip/:skip', (request, response) => {
  return indexTransactionsController.handle(request, response)
})

router.post('/', (request, response) => {
  return createTransactionController.handle(request, response)
})

router.post('/import', fileUpload, (request, response) => {
  return importTransactionsController.handle(request, response)
})

router.delete('/:id', (request, response) => {
  return deleteTransactionController.handle(request, response)
})

export default router
