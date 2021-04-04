import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import './database/connection';

import CategoryResolver from './graphql/Category/CategoryResolver';
import VideoResolver from './graphql/Video/VideoResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 3333 }, () => console.log('Server started'));
}

bootstrap();
