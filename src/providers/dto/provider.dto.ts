import {
  FilterableField,
  FilterableRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { ProductDto } from 'src/products/dto/product.dto';

@ObjectType('provider')
@FilterableRelation('product', () => ProductDto)
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
export class ProviderDto {
  @IDField(() => ID)
  id: string;

  @FilterableField()
  contactname: string;

  @FilterableField()
  email: string;

  @FilterableField()
  phone: string;

  @FilterableField()
  direction: string;

  @Field(() => GraphQLISODateTime)
  createAt: Date;

  @Field(() => GraphQLISODateTime)
  updateAt: Date;
}
