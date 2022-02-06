import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProviderEntity } from './entities/provider.entity';

@QueryService(ProviderEntity)
export class ProviderService extends TypeOrmQueryService<ProviderEntity> {
  constructor(
    @InjectRepository(ProviderEntity) repo: Repository<ProviderEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
