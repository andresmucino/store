import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';

@QueryService(ProductEntity)
export class ProductService extends TypeOrmQueryService<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity) repoProduct: Repository<ProductEntity>,
  ) {
    super(repoProduct, { useSoftDelete: true });
  }
}
