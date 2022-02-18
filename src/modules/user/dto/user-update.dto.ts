import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType('UserUpdate')
export class UserUpdateDTO {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  customerId?: string;
}
