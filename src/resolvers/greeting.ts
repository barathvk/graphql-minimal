import { Resolver, Query, Arg } from 'type-graphql'
import { Greeting } from '../model/greeting'

@Resolver(Greeting)
export class GreetingResolver {
  @Query(() => Greeting)
  async greeting(@Arg('name') name: string) {
    return {
      message: `Hello ${name}`,
    }
  }
}
