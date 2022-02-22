import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserRole } from '../entities/user.entity';

@InputType('UserInput')
export class UserInputDTO {
  @Field()
  @IsString()
  @IsNotEmpty()
  email!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password!: string;

  @Field(() => [UserRole], { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  role?: string;
}
