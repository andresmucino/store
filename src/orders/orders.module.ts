import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { OrdersDto } from './dto/orders.dto';
import { OrdersEntity } from './entity/orders.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrdersEntity])],
      resolvers: [{ DTOClass: OrdersDto, EntityClass: OrdersEntity }],
    }),
  ],
})
export class OrdersModule {}
