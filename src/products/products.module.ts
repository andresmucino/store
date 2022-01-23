import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ProductsEntity } from './entity/products.entity';
import { ProductsDto } from './dto/products.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductsEntity])],
      resolvers: [{ DTOClass: ProductsDto, EntityClass: ProductsEntity }],
    }),
  ],
})
export class ProductsModule {}
