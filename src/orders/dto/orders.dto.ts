import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID } from '@nestjs/graphql';

export class OrdersDto {
  @IDField(() => ID)
  id: string;

  @FilterableField()
  date: Date;

  @Field(() => GraphQLISODateTime)
  createAt: Date;

  @Field(() => GraphQLISODateTime)
  updateAt: Date;
}
