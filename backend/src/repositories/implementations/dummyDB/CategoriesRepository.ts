import ICategory from '@/entities/ICategory'
import ICategoriesRepository from '@/repositories/ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private container: ICategory[] = []

  public async bootstrap(entity: Partial<ICategory>): Promise<ICategory> {
    const newCategory: ICategory = {
      id: this.container.length,
      title: entity.title || '',
      created_at: new Date(),
      updated_at: new Date()
    }

    this.container.push(newCategory)
    return newCategory
  }

  public async index(take: number, skip: number): Promise<ICategory[]> {
    const categories: ICategory[] = []
    let taken = 0

    for (let i = skip; (i < this.container.length) && (taken != take); i++) {
      if (this.container[i]) {
        taken++
        categories.push(this.container[i])
      }
    }

    return categories
  }

  public async findByTitle(title: string): Promise<ICategory | undefined> {
    return this.container.find(category => (category.title === title))
  }
}

export default CategoriesRepository
