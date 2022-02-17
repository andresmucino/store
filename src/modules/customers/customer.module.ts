import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CustomerDTO } from './dto/customer.dto';
import { CustomerEntity } from './entities/customer.entity';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { CustomerInputDTO } from './dto/customer-input.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CustomerUpdateDTO } from './dto/customer-update.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CustomerEntity])],
      services: [CustomerService],
      resolvers: [
        {
          DTOClass: CustomerDTO,
          EntityClass: CustomerEntity,
          CreateDTOClass: CustomerInputDTO,
          UpdateDTOClass: CustomerUpdateDTO,
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
