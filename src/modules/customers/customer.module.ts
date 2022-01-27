import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { CustomerEntity } from './entity/customer.entity';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CustomerEntity])],
      resolvers: [
        {
          DTOClass: CustomerDto,
          EntityClass: CustomerEntity,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
        },
      ],
    }),
  ],
  providers: [CustomerService, CustomerResolver],
})
export class CustomerModule {}
