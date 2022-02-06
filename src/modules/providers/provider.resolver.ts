import { UpdateManyResponse, Filter } from '@nestjs-query/core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Resolver, Args, Mutation, ID } from '@nestjs/graphql';
import { ProviderDto } from './dto/provider.dto';
import { ProviderService } from './provider.service';

@Resolver(() => ProviderDto)
export class ProviderResolver {
  constructor(readonly service: ProviderService) {}

  @Mutation(() => ProviderDto)
  restoreOneProvider(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<ProviderDto> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProviders(
    @Args('input', { type: () => FilterType(ProviderDto) })
    filter: Filter<ProviderDto>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
