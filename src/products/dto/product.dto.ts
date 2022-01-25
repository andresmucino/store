import {
  FilterableCursorConnection,
  FilterableField,
  FilterableRelation,
  IDField,
  KeySet,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';
import { OrderDto } from 'src/orders/dto/order.dto';
import { ProviderDto } from 'src/providers/dto/provider.dto';

@ObjectType('Product')
@KeySet(['id'])
@FilterableCursorConnection('providers', () => ProviderDto, {
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
  @IDField(() => ID)
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  description: string;

  @FilterableField()
  price: number;

  @FilterableField()
  stock: number;

  @FilterableField()
  image: string;

  @Field(() => GraphQLISODateTime)
  createAt: Date;

  @Field(() => GraphQLISODateTime)
  updateAt: Date;
}
