import { Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  email!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  role!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  customerId?: string;
}
