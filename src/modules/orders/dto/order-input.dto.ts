import { Field, InputType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';

@InputType('OrderInput')
export class OrderInputDto {
  @Field()
  @IsDate()
  date!: Date;

  @Field({ nullable: true })
  customerI?: string;
}
