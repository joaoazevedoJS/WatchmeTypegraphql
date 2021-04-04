import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import Category from './Category';
import CategoryInput from './CategoryInput';

import CategorySchema from '../../models/Category';

@Resolver(Category)
class CategoryResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    const categories = await CategorySchema.find();

    return categories;
  }

  @Mutation(() => Category)
  async createCategory(
    @Arg('categoryInput') categoryInput: CategoryInput,
  ): Promise<Category> {
    const category = await CategorySchema.create(categoryInput);

    return category;
  }
}

export default CategoryResolver;
