class ServiceError {
  public readonly code: number
  public readonly message: string

  constructor(message: string, code = 400) {
    this.code = code
    this.message = message
  }
}

export default ServiceError
