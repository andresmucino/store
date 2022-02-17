import {
  BeforeCreateMany,
  BeforeCreateOne,
  CreateManyInputType,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { nanoid } from 'nanoid';
import { UserContext } from 'src/auth/interface/auth.interface';
import { OrderDTO } from './order.dto';

@InputType('OrderInput')
@BeforeCreateOne(
  (input: CreateOneInputType<OrderDTO>, context: UserContext) => {
    input.input.id = nanoid(24);
    input.input.createdBy = context.req.user.email;
    input.input.createdById = context.req.user.id;
    input.input.updatedBy = context.req.user.email;
    input.input.updatedById = context.req.user.id;
    return input;
  },
)
@BeforeCreateMany(
  (input: CreateManyInputType<OrderDTO>, context: UserContext) => {
    const createdBy = context.req.user.email;
    const createdById = context.req.user.id;
    const updatedBy = context.req.user.email;
    const updatedById = context.req.user.id;
    input.input = input.input.map((c) => {
      const id = nanoid(24);
      return {
        ...c,
        id,
        createdBy,
        createdById,
        updatedBy,
        updatedById,
      };
    });
    return input;
  },
)
export class OrderInputDTO {
  @Field()
  @IsDate()
  date!: Date;

  // @Field({ nullable: true })
  // customerId?: string;

  @Field({ nullable: true })
  quantity?: number;
}
