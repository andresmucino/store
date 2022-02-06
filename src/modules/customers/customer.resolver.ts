import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';
import { UpdateManyResponse, Filter } from '@nestjs-query/core';

@Resolver(() => CustomerDto)
export class CustomerResolver {
  constructor(readonly service: CustomerService) {}

  @Mutation(() => CustomerDto)
  restoreOneCustomer(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<CustomerDto> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyCustomers(
    @Args('input', { type: () => FilterType(CustomerDto) })
    filter: Filter<CustomerDto>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
