import {
  BeforeCreateMany,
  BeforeCreateOne,
  CreateManyInputType,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { nanoid } from 'nanoid';
import { GqlContext } from 'src/config';
import { ProductDto } from './product.dto';

@InputType('ProductInput')
@BeforeCreateOne(
  (input: CreateOneInputType<ProductDto>, context: GqlContext) => {
    input.input.id = nanoid(24);
    return input;
  },
)
@BeforeCreateMany(
  (input: CreateManyInputType<ProductDto>, context: GqlContext) => {
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
export class ProductInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  description!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  price!: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  stock!: number;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  image?: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  orderId?: string;
}
