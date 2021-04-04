import mongoose from 'mongoose';

import Category from '../graphql/Category/Category';

const Schema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

export default mongoose.model<Category>('Categories', Schema);
