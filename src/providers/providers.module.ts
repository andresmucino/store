import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { ProvidersDto } from './dto/providers.dto';
import { ProvidersEntity } from './entity/providers.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProvidersEntity])],
      resolvers: [{ DTOClass: ProvidersDto, EntityClass: ProvidersEntity }],
    }),
  ],
})
export class ProvidersModule {}
