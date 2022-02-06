import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { QueryService } from '@nestjs-query/core';
import { OrderEntity } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryService(OrderEntity)
export class OrderService extends TypeOrmQueryService<OrderEntity> {
  constructor(@InjectRepository(OrderEntity) repo: Repository<OrderEntity>) {
    super(repo, { useSoftDelete: true });
  }
}
