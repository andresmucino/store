import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('order')
export class OrderDto {
  @IDField(() => ID)
  id: string;

  @FilterableField()
  date: Date;

  @Field(() => GraphQLISODateTime)
  createAt: Date;

  @Field(() => GraphQLISODateTime)
  updateAt: Date;
}
