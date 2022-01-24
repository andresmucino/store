import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('customer')
export class CustomerDto {
  @IDField(() => ID)
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  lastname: string;

  @FilterableField()
  phone: string;

  @FilterableField()
  email: string;

  @FilterableField()
  direction: string;

  @Field(() => GraphQLISODateTime)
  createAt: Date;

  @Field(() => GraphQLISODateTime)
  updateAt: Date;
}
