import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

@InputType('CustomerInput')
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
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  direction!: string;
}
