import {
  BeforeUpdateMany,
  BeforeUpdateOne,
  UpdateManyInputType,
  UpdateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { UserContext } from 'src/auth/interface/auth.interface';
import { CustomerDTO } from './customer.dto';

@InputType('CustomerUpdate')
@BeforeUpdateOne(
  (input: UpdateOneInputType<CustomerDTO>, context: UserContext) => {
    input.update.updatedBy = context.req.user.email;
    input.update.updatedById = context.req.user.id;
    return input;
  },
)
@BeforeUpdateMany(
  (
    input: UpdateManyInputType<CustomerDTO, CustomerDTO>,
    context: UserContext,
  ) => {
    input.update.updatedBy = context.req.user.email;
    input.update.updatedById = context.req.user.id;
    return input;
  },
)
export class CustomerUpdateDTO {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastname?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  direction?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  image?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  userId?: string;
}
