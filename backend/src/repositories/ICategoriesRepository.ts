import ICategory from '@/entities/ICategory'

interface ICategoriesRepository {
  bootstrap(entity: Partial<ICategory>): Promise<ICategory>
  index(take: number, skip: number): Promise<ICategory[]>
  findByTitle(title: string): Promise<ICategory | undefined>
}

export default ICategoriesRepository
