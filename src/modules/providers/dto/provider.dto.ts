import {
  FilterableField,
  FilterableRelation,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { ProductDto } from 'src/modules/products/dto/product.dto';

@ObjectType('Provider')
// @FilterableRelation('product', () => ProductDto)
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
export class ProviderDto {
  @FilterableField(() => ID)
  id!: string;

  @FilterableField()
  contactName!: string;

  @FilterableField()
  email!: string;

  @FilterableField()
  phone!: string;

  @FilterableField()
  direction!: string;

  // @FilterableField({ nullable: true })
  // productId?: string;

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

  @Field(() => GraphQLISODateTime, { nullable: true})
  deleteAt?: Date
}
