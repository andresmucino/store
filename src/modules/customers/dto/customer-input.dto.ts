import {
  BeforeCreateMany,
  BeforeCreateOne,
  CreateManyInputType,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { nanoid } from 'nanoid';
import { CustomerDto } from './customer.dto';

@InputType('CustomerInput')
@BeforeCreateOne(
  (input: CreateOneInputType<CustomerDto>, context: any) => {
    input.input.id = nanoid(24);
    return input;
  },
)
@BeforeCreateMany(
  (input: CreateManyInputType<CustomerDto>, context: any) => {
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
export class CustomerInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastname!: string;

  @Field()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  direction!: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  image?: string;
}
