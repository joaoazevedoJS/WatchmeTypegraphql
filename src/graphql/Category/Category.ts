import { Document } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Category extends Document {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}

export default Category;
