import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import Video from './Video';

import VideoSchema from '../../models/Video';
import CategorySchema from '../../models/Category';

import VideoInput from './VIdeoInput';

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos(): Promise<Video[]> {
    const videos = await VideoSchema.find();

    return videos;
  }

  @Mutation(() => Video)
  async createVideos(
    @Arg('videoInput') videoInput: VideoInput,
  ): Promise<Video> {
    const video = await VideoSchema.create(videoInput);
    const category = await CategorySchema.findById(videoInput.category);

    video.category = category ? category.description : '';

    return video;
  }
}

export default VideoResolver;
