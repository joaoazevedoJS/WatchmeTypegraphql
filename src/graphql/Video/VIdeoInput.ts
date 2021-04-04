import { Field, InputType } from 'type-graphql';

@InputType()
class VideoInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;
}

export default VideoInput;
