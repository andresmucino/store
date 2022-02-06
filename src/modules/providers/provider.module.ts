import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { ProviderDto } from './dto/provider.dto';
import { ProviderEntity } from './entities/provider.entity';
import { ProviderService } from './provider.service';
import { ProviderResolver } from './provider.resolver';
import { ProviderInputDto } from './dto/provider-input.dto';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([ProviderEntity]),
        UserModule,
      ],
      services: [ProviderService],
      resolvers: [
        {
          DTOClass: ProviderDto,
          EntityClass: ProviderEntity,
          CreateDTOClass: ProviderInputDto,
          UpdateDTOClass: ProviderInputDto,
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
