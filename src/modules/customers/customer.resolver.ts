import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './dto/customer.dto';
import { UpdateManyResponse, Filter } from '@nestjs-query/core';

@Resolver(() => CustomerDTO)
export class CustomerResolver {
  constructor(readonly service: CustomerService) {}

  @Mutation(() => CustomerDTO)
  restoreOneCustomer(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<CustomerDTO> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyCustomers(
    @Args('input', { type: () => FilterType(CustomerDTO) })
    filter: Filter<CustomerDTO>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
