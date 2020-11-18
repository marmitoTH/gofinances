import ServiceError from "@/exceptions/ServiceError";
import ITransactionsRepository from "@/repositories/ITransactionsRepository";

class DeleteTransactionUseCase {
  constructor(
    private transactionsRepository: ITransactionsRepository
  ) { }

  public async execute(id: number): Promise<void> {
    if (isNaN(id)) {
      throw new ServiceError('ID is invalid')
    }

    if (!(await this.transactionsRepository.findById(id))) {
      throw new ServiceError('No transaction with the given id', 404)
    }

    return await this.transactionsRepository.removeById(id)
  }
}

export default DeleteTransactionUseCase

