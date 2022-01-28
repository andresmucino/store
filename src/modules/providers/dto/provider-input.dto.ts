import { Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class ProviderInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  contactname!: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @Field()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  direction!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  productId?: string;
}
