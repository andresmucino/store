import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CustomersDto } from './dto/customer.dto';
import { CustomersEntity } from './entity/customers.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CustomersEntity])],
      resolvers: [
        {
          DTOClass: CustomersDto,
          EntityClass: CustomersEntity,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
        },
      ],
    }),
  ],
})
export class CustomersModule {}
