import { Filter, UpdateManyResponse } from '@nestjs-query/core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private service: UserService) {}

  @Mutation(() => UserDto)
  restoreOneUser(
    @Args('input', { type: () => ID }) id: string,
  ): Promise<UserDto> {
    return this.service.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyUsers(
    @Args('input', { type: () => FilterType(UserDto) }) filter: Filter<UserDto>,
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter);
  }
}
