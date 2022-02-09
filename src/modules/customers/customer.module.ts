import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { CustomerEntity } from './entities/customer.entity';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { CustomerInputDto } from './dto/customer-input.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CustomerEntity])],
      services: [CustomerService],
      resolvers: [
        {
          DTOClass: CustomerDto,
          EntityClass: CustomerEntity,
          CreateDTOClass: CustomerInputDto,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
          guards: [JwtAuthGuard]
        },
      ],
    }),
  ],
  providers: [CustomerService, CustomerResolver],
  exports: [CustomerService],
})
export class CustomerModule {}
