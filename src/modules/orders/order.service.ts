import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './entity/order.entity';

@QueryService(OrderEntity)
export class OrderService extends TypeOrmQueryService<OrderEntity> {
  constructor(
    @InjectRepository(OrderEntity) repoOrder: Repository<OrderEntity>,
  ) {
    super(repoOrder, { useSoftDelete: true });
  }
}
