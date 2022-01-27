import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  CRUDResolver,
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Resolver(() => CustomerDto)
export class CustomerResolver extends CRUDResolver(CustomerDto) {
  constructor(readonly serviceCustomer: CustomerService) {
    super(serviceCustomer);
  }

  @Mutation(() => CustomerDto)
  restoreOneCustomer(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<CustomerDto> {
    return this.serviceCustomer.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyCustomers(
    @Args('input', { type: () => FilterType(CustomerDto) })
    filter: Filter<CustomerDto>,
  ): Promise<UpdateManyResponse> {
    return this.serviceCustomer.restoreMany(filter);
  }
}
