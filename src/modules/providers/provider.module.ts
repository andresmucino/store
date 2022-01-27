import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { ProviderDto } from './dto/provider.dto';
import { ProviderEntity } from './entity/provider.entity';
import { ProviderService } from './provider.service';
import { ProviderResolver } from './provider.resolver';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProviderEntity])],
      services: [ProviderService],
      resolvers: [
        {
          DTOClass: ProviderDto,
          EntityClass: ProviderEntity,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
        },
      ],
    }),
  ],
  providers: [ProviderService, ProviderResolver],
  exports: [ProviderService],
})
export class ProviderModule {}
