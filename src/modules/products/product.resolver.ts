import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  CRUDResolver,
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Resolver(() => ProductDto)
export class ProductResolver extends CRUDResolver(ProductDto) {
  constructor(readonly serviceProduct: ProductService) {
    super(serviceProduct);
  }

  @Mutation(() => ProductDto)
  restoreOneProduct(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<ProductDto> {
    return this.serviceProduct.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProduct(
    @Args('input', { type: () => FilterType(ProductDto) })
    filter: Filter<ProductDto>,
  ): Promise<UpdateManyResponse> {
    return this.serviceProduct.restoreMany(filter);
  }
}
