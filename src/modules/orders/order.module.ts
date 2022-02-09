import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderEntity } from './entities/order.entity';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { OrderInputDto } from './dto/order-input.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderEntity])],
      services: [OrderService],
      resolvers: [
        {
          DTOClass: OrderDto,
          EntityClass: OrderEntity,
          CreateDTOClass: OrderInputDto,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
          guards: [JwtAuthGuard]
        },
      ],
    }),
  ],
  providers: [OrderService, OrderResolver],
  exports: [OrderService],
})
export class OrderModule {}
