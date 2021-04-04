import { Document } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

import Category from '../Category/Category';

@ObjectType()
class Video extends Document {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;
}

export default Video;
