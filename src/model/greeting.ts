import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Greeting {
  @Field()
  message: string
}
