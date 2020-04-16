import 'reflect-metadata'
import { loadConfig } from '@delphai/typed-config'
import bunyan from 'bunyan'
import { Config } from './lib/config'
import { ApolloServer } from 'apollo-server'
export const config = loadConfig(Config)
export const logger = bunyan.createLogger(config.logger)

import { buildSchema } from 'type-graphql'
import { GreetingResolver } from './resolvers/greeting'

const start = async () => {
  const schema = await buildSchema({
    resolvers: [GreetingResolver],
  })
  const server = new ApolloServer({
    schema,
    playground: true,
  })
  const { port } = await server.listen(config.server.port)
  logger.info(`Started terms-dictionary on port ${port}`)
}

start()
