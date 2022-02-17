import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Resolver(() => ProductDTO)
export class ProductResolver {
  constructor(readonly service: ProductService) {}

  @Mutation(() => ProductDTO)
  restoreOneProduct(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<ProductDTO> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProduct(
    @Args('input', { type: () => FilterType(ProductDTO) })
    filter: Filter<ProductDTO>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
