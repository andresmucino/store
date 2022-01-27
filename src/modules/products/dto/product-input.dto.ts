import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType } from '@nestjs/graphql';

@InputType('ProductInput')
export class ProductInputDto {
  @FilterableField()
  name!: string;

  @FilterableField()
  description!: string;

  @FilterableField()
  price!: number;

  @FilterableField()
  stock!: number;

  @FilterableField()
  image?: string;
}
