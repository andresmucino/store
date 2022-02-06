import {
  FilterableCursorConnection,
  FilterableField,
  FilterableRelation,
  KeySet,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { OrderDto } from 'src/modules/orders/dto/order.dto';
import { ProviderDto } from 'src/modules/providers/dto/provider.dto';

@ObjectType('Product')
@KeySet(['id'])
@FilterableCursorConnection('provider', () => ProviderDto, {
  nullable: true,
  pagingStrategy: PagingStrategies.OFFSET,
  enableAggregate: true,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
@FilterableRelation('order', () => OrderDto, { nullable: true })
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
export class ProductDto {
  @FilterableField(() => ID)
  id!: string;

  @FilterableField()
  name!: string;

  @FilterableField()
  description!: string;

  @FilterableField()
  price!: number;

  @FilterableField()
  stock!: number;

  @FilterableField({ nullable: true })
  image?: string;

  @FilterableField({ nullable: true })
  orderId?: string;

  @Field(() => GraphQLISODateTime)
  createAt?: Date;

  @Field(() => GraphQLISODateTime)
  updateAt?: Date;
}
