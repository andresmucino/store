import {
  FilterableField,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
export class UserDto {
  @FilterableField()
  id!: string;

  @FilterableField()
  email!: string;

  @FilterableField()
  password!: string;

  @Field(() => GraphQLISODateTime)
  createAt!: Date;

  @Field(() => GraphQLISODateTime)
  updateAt!: Date;
}
