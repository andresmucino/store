import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  CRUDResolver,
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Resolver(() => OrderDto)
export class OrderResolver extends CRUDResolver(OrderDto) {
  constructor(readonly serviceOrder: OrderService) {
    super(serviceOrder);
  }

  @Mutation(() => OrderDto)
  restoreOneOrder(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<OrderDto> {
    return this.serviceOrder.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyCustomers(
    @Args('input', { type: () => FilterType(OrderDto) })
    filter: Filter<OrderDto>,
  ): Promise<UpdateManyResponse> {
    return this.serviceOrder.restoreMany(filter);
  }
}
