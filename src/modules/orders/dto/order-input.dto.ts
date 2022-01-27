import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType } from '@nestjs/graphql';

@InputType('OrderInput')
export class OrderInputDto {
  @FilterableField()
  date!: Date;
}
