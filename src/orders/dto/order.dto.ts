import {
  FilterableCursorConnection,
  FilterableField,
  FilterableRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { CustomerDto } from 'src/customers/dto/customer.dto';
import { ProductDto } from 'src/products/dto/product.dto';

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
  @IDField(() => ID)
  id: string;

  @FilterableField()
  date: Date;

  @Field(() => GraphQLISODateTime)
  createAt: Date;

  @Field(() => GraphQLISODateTime)
  updateAt: Date;
}
