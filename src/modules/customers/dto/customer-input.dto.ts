import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

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
  @IsString()
  @IsNotEmpty()
  direction!: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  image?: string;
}
