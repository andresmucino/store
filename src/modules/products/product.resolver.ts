import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Resolver(() => ProductDto)
export class ProductResolver {
  constructor(readonly service: ProductService) {}

  @Mutation(() => ProductDto)
  restoreOneProduct(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<ProductDto> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProduct(
    @Args('input', { type: () => FilterType(ProductDto) })
    filter: Filter<ProductDto>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
