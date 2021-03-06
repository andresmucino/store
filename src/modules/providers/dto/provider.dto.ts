import {
  FilterableCursorConnection,
  FilterableField,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { ProductDTO } from 'src/modules/products/dto/product.dto';

@ObjectType('Provider')
@FilterableCursorConnection('Products', () => ProductDTO, {
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
export class ProviderDTO {
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

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  deletedAt?: Date;
}
