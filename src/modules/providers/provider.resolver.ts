import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  CRUDResolver,
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { ProviderDto } from './dto/provider.dto';
import { ProviderService } from './provider.service';

@Resolver(() => ProviderDto)
export class ProviderResolver extends CRUDResolver(ProviderDto) {
  constructor(readonly serviceProvider: ProviderService) {
    super(serviceProvider);
  }

  @Mutation(() => ProviderDto)
  restoreOneProvider(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<ProviderDto> {
    return this.serviceProvider.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProvider(
    @Args('input', { type: () => FilterType(ProviderDto) })
    filter: Filter<ProviderDto>,
  ): Promise<UpdateManyResponse> {
    return this.serviceProvider.restoreMany(filter);
  }
}
