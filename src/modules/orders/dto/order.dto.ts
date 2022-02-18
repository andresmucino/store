import {
  FilterableCursorConnection,
  FilterableField,
  FilterableRelation,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
// import { CustomerDto } from 'src/modules/customers/dto/customer.dto';
import { ProductDTO } from 'src/modules/products/dto/product.dto';

@ObjectType('Order')
// @FilterableCursorConnection('Products', () => ProductDTO, {
//   nullable: true,
//   pagingStrategy: PagingStrategies.OFFSET,
//   enableAggregate: true,
//   enableTotalCount: true,
//   maxResultsSize: 1000,
// })
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
export class OrderDTO {
  @FilterableField(() => ID)
  id!: string;

  @FilterableField({ nullable: true })
  quantity?: number;

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
  createAt!: Date;

  @Field(() => GraphQLISODateTime)
  updateAt!: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  deleteAt?: Date;
}
