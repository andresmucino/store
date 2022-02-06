import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { QueryService } from '@nestjs-query/core';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryService(ProductEntity)
export class ProductService extends TypeOrmQueryService<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity) repo: Repository<ProductEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
