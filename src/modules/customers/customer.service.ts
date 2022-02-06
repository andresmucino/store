import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './entities/customer.entity';

@QueryService(CustomerEntity)
export class CustomerService extends TypeOrmQueryService<CustomerEntity> {
  constructor(
    @InjectRepository(CustomerEntity) repo: Repository<CustomerEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
