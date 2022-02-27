import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserRole } from '../entities/user.entity';

@InputType('UserUpdate')
export class UserUpdateDTO {
  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
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

  @Field(() => [UserRole], { nullable: true })
  @IsOptional()
  @IsNotEmpty()
   role?: string;
}
