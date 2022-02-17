import {
  BeforeCreateMany,
  BeforeCreateOne,
  CreateManyInputType,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { nanoid } from 'nanoid';
import { OrderDto } from './order.dto';

@InputType('OrderInput')
@BeforeCreateOne((input: CreateOneInputType<OrderDto>, context: any) => {
  input.input.id = nanoid(24);
  return input;
})
@BeforeCreateMany(
  (input: CreateManyInputType<OrderDto>, context: any) => {
    input.input = input.input.map((c) => {
      const id = nanoid(24);
      return {
        ...c,
        id,
      };
    });
    return input;
  },
)
export class OrderInputDto {
  @Field()
  @IsDate()
  date!: Date;

  @Field({ nullable: true })
  customerId?: string;

  @Field({ nullable: true })
  quantity?: number;
}
