import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { CustomerEntity } from './entity/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryService(CustomerEntity)
export class CustomerService extends TypeOrmQueryService<CustomerEntity> {
  constructor(
    @InjectRepository(CustomerEntity) repoCus: Repository<CustomerEntity>,
  ) {
    super(repoCus, { useSoftDelete: true });
  }
}
