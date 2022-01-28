import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID } from '@nestjs/graphql';

export class UserDto {
  @FilterableField(() => ID)
  id!: string;

  @FilterableField()
  email!: string;

  @FilterableField()
  password!: string;

  @FilterableField()
  role!: string;

  @FilterableField()
  customerId?: string;

  @Field(() => GraphQLISODateTime)
  createAt!: Date;

  @Field(() => GraphQLISODateTime)
  updateAt!: Date;

  @Field(() => GraphQLISODateTime)
  deleteAt?: Date;
}
