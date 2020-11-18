interface IDatabase {
  connect(): Promise<void>
}

export default IDatabase
