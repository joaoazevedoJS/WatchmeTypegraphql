import mongoose from 'mongoose';

import Video from '../graphql/Video/Video';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
  },
});

export default mongoose.model<Video>('Videos', Schema);
