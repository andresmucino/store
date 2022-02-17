import {
  BeforeUpdateMany,
  BeforeUpdateOne,
  UpdateManyInputType,
  UpdateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { UserContext } from 'src/auth/interface/auth.interface';
import { ProductDTO } from './product.dto';

@InputType('ProductUpdate')
@BeforeUpdateOne(
  (input: UpdateOneInputType<ProductDTO>, context: UserContext) => {
    input.update.updatedBy = context.req.user.email;
    input.update.updatedById = context.req.user.id;
    return input;
  },
)
@BeforeUpdateMany(
  (
    input: UpdateManyInputType<ProductDTO, ProductDTO>,
    context: UserContext,
  ) => {
    input.update.updatedBy = context.req.user.email;
    input.update.updatedById = context.req.user.id;
    return input;
  },
)
export class ProductUpdateDTO {
  @Field()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @Field()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @Field()
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  price?: number;

  @Field()
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  stock?: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  image?: string;
}
