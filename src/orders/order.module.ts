import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderEntity } from './entity/order.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderEntity])],
      resolvers: [
        {
          DTOClass: OrderDto,
          EntityClass: OrderEntity,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
        },
      ],
    }),
  ],
})
export class OrderModule {}
