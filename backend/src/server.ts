import express from 'express'
import router from './router'
import database from './database'
import cors from 'cors'

const port = 3333
const app = express()

database.connect().then(() => {
  app.use(cors())
  app.use(express.json())
  app.use(router)
}).catch(() => {
  console.log('Database is offline')
  app.use('*', (_, response) => {
    return response.status(500).send()
  })
})

app.listen(port, () => {
  console.log('Server is running...')
})
