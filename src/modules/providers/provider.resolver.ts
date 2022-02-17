import { UpdateManyResponse, Filter } from '@nestjs-query/core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Resolver, Args, Mutation, ID } from '@nestjs/graphql';
import { ProviderDTO } from './dto/provider.dto';
import { ProviderService } from './provider.service';

@Resolver(() => ProviderDTO)
export class ProviderResolver {
  constructor(readonly service: ProviderService) {}

  @Mutation(() => ProviderDTO)
  restoreOneProvider(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<ProviderDTO> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProviders(
    @Args('input', { type: () => FilterType(ProviderDTO) })
    filter: Filter<ProviderDTO>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
