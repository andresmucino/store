import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('providers')
export class ProvidersDto {
  @IDField(() => ID)
  id: string;

  @FilterableField()
  contactname: string;

  @FilterableField()
  email: string;

  @FilterableField()
  phone: string;

  @FilterableField()
  direction: string;

  @Field(() => GraphQLISODateTime)
  createAt: Date;

  @Field(() => GraphQLISODateTime)
  updateAt: Date;
}
