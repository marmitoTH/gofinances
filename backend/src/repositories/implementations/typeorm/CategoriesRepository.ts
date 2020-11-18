import { getRepository } from 'typeorm'
import ICategory from '@/entities/ICategory'
import Category from '@/entities/implementations/typeorm/Category'
import ICategoriesRepository from '../../ICategoriesRepository'

class CategoryRepository implements ICategoriesRepository {
  public async bootstrap(entity: Partial<ICategory>): Promise<ICategory> {
    const repository = getRepository(Category)
    const category = repository.create({ title: entity.title })
    return await repository.save(category)
  }

  public async index(take: number, skip: number): Promise<ICategory[]> {
    const repository = getRepository(Category)
    return await repository.find({ take, skip })
  }

  public async findByTitle(title: string): Promise<ICategory | undefined> {
    const repository = getRepository(Category)
    return await repository.findOne({ where: { title } })
  }
}

export default CategoryRepository
