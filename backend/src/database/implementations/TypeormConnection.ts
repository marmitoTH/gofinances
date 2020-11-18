import { createConnection } from 'typeorm'
import IDatabase from '../IDatabse'
import 'reflect-metadata'

class TypeormConnection implements IDatabase {
  public async connect(): Promise<void> {
    return await createConnection().then(() => {
      console.log('Connected to the databse!')
    })
  }
}

export default TypeormConnection
