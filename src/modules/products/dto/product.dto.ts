import {
  FilterableField,
  FilterableRelation,
  KeySet,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
// import { OrderDto } from 'src/modules/orders/dto/order.dto';
import { ProviderDTO } from 'src/modules/providers/dto/provider.dto';

@ObjectType('Product')
@KeySet(['id'])
@FilterableRelation('provider', () => ProviderDTO, {
  nullable: true,
})
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

  @FilterableField({ nullable: true })
  providerId?: string;

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
  createdAt?: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAt?: Date;
}
