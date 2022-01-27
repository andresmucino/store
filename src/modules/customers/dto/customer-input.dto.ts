import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType } from '@nestjs/graphql';

@InputType('CustomerInput')
export class CustomerInputDto {
  @FilterableField()
  name!: string;

  @FilterableField()
  lastname!: string;

  @FilterableField()
  phone!: string;

  @FilterableField()
  email!: string;

  @FilterableField()
  direction!: string;
}
