import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Resolver(() => OrderDto)
export class OrderResolver {
  constructor(readonly service: OrderService) {}

  @Mutation(() => OrderDto)
  restoreOneOrder(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<OrderDto> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProviders(
    @Args('input', { type: () => FilterType(OrderDto) })
    filter: Filter<OrderDto>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
