import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';
import { OrderEntity } from './entities/order.entity';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { OrderInputDTO } from './dto/order-input.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OrderUpdateDTO } from './dto/order-update.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderEntity])],
      services: [OrderService],
      resolvers: [
        {
          DTOClass: OrderDTO,
          EntityClass: OrderEntity,
          CreateDTOClass: OrderInputDTO,
          UpdateDTOClass: OrderUpdateDTO,
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
