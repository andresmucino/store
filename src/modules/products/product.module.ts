import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ProductEntity } from './entity/product.entity';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ProductInputDto } from './dto/product-input.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductEntity])],
      services: [ProductService],
      resolvers: [
        {
          DTOClass: ProductDto,
          EntityClass: ProductEntity,
          CreateDTOClass: ProductInputDto,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
        },
      ],
    }),
  ],
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
})
export class ProductModule {}
