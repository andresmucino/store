import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { OrderDTO } from './dto/order.dto';
import { OrderService } from './order.service';

@Resolver(() => OrderDTO)
export class OrderResolver {
  constructor(readonly service: OrderService) {}

  @Mutation(() => OrderDTO)
  restoreOneOrder(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<OrderDTO> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyProviders(
    @Args('input', { type: () => FilterType(OrderDTO) })
    filter: Filter<OrderDTO>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
