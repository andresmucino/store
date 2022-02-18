import {
  BeforeUpdateMany,
  BeforeUpdateOne,
  UpdateManyInputType,
  UpdateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { UserContext } from 'src/auth/interface/auth.interface';
import { OrderDTO } from './order.dto';

@InputType('OrderUpdate')
@BeforeUpdateOne(
  (input: UpdateOneInputType<OrderDTO>, context: UserContext) => {
    input.update.updatedBy = context.req.user.email;
    input.update.updatedById = context.req.user.id;
    return input;
  },
)
@BeforeUpdateMany(
  (input: UpdateManyInputType<OrderDTO, OrderDTO>, context: UserContext) => {
    input.update.updatedBy = context.req.user.email;
    input.update.updatedById = context.req.user.id;
    return input;
  },
)
export class OrderUpdateDTO {
  // @Field({ nullable: true })
  // customerId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  quantity?: number;
}
