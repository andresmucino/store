import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType('ProductInput')
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
