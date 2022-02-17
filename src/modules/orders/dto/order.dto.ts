import {
  FilterableCursorConnection,
  FilterableField,
  FilterableRelation,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { CustomerDto } from 'src/modules/customers/dto/customer.dto';
import { ProductDto } from 'src/modules/products/dto/product.dto';

@ObjectType('Order')
@FilterableRelation('customer', () => CustomerDto, { nullable: true })
@FilterableCursorConnection('products', () => ProductDto, {
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
export class OrderDto {
  @FilterableField(() => ID)
  id!: string;

  @FilterableField()
  date!: Date;

  @FilterableField({ nullable: true })
  quantity?: number;

  // @FilterableField({ nullable: true })
  // customerId?: string;

  @Field(() => GraphQLISODateTime)
  createAt!: Date;

  @Field(() => GraphQLISODateTime)
  updateAt!: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  deleteAt?: Date;
}
