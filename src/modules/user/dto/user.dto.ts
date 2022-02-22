import {
  FilterableField,
  FilterableRelation,
  PagingStrategies,
  QueryOptions,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { CustomerDTO } from 'src/modules/customers/dto/customer.dto';
import { UserRole } from '../entities/user.entity';

@ObjectType('User')
@FilterableRelation('customer', () => CustomerDTO, { nullable: true })
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  maxResultsSize: 1000,
})
export class UserDTO {
  @FilterableField(() => ID)
  id!: string;

  @FilterableField()
  email!: string;

  @FilterableField()
   password!: string;

  @Field(() => [UserRole], { nullable: true })
  role?: string;

  @FilterableField({ nullable: true })
  customerId?: string;

  @Field(() => GraphQLISODateTime)
  createAt!: Date;

  @Field(() => GraphQLISODateTime)
  updateAt!: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  deleteAt?: Date;
}
