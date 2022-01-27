import {
  FilterableCursorConnection,
  FilterableField,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { OrderDto } from 'src/modules/orders/dto/order.dto';

@ObjectType('Customer')
@FilterableCursorConnection('orders', () => OrderDto, {
  nullable: true,
  pagingStrategy: PagingStrategies.OFFSET,
  enableAggregate: true,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
export class CustomerDto {
  @FilterableField(() => ID)
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
