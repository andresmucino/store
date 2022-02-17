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
import { ProviderDTO } from 'src/modules/providers/dto/provider.dto';

@ObjectType('Product')
@KeySet(['id'])
// @FilterableCursorConnection('provider', () => ProviderDto, {
//   nullable: true,
//   pagingStrategy: PagingStrategies.OFFSET,
//   enableAggregate: true,
//   enableTotalCount: true,
//   maxResultsSize: 1000,
// })
// @FilterableRelation('order', () => OrderDto, { nullable: true })
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
export class ProductDTO {
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

  // @FilterableField({ nullable: true })
  // orderId?: string;

  @FilterableField()
  createdBy?: string;

  @FilterableField()
  createdById?: string;

  @FilterableField()
  updatedBy?: string;

  @FilterableField()
  updatedById?: string;

  @FilterableField({ nullable: true })
  deletedBy?: string;

  @FilterableField({ nullable: true })
  deletedById?: string;

  @Field(() => GraphQLISODateTime)
  createAt?: Date;

  @Field(() => GraphQLISODateTime)
  updateAt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  deleteAt?: Date;
}
