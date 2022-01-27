import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProviderEntity } from './entity/provider.entity';

@QueryService(ProviderEntity)
export class ProviderService extends TypeOrmQueryService<ProviderEntity> {
  constructor(
    @InjectRepository(ProviderEntity) repoProvider: Repository<ProviderEntity>,
  ) {
    super(repoProvider, { useSoftDelete: true });
  }
}
