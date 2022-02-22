import { Module, UseGuards } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ProductInputDTO } from './dto/product-input.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductUpdateDTO } from './dto/product-update.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/decorators/role.decorator';
import { UserRole } from '../user/entities/user.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductEntity])],
      services: [ProductService],
      resolvers: [
        {
          DTOClass: ProductDTO,
          EntityClass: ProductEntity,
          CreateDTOClass: ProductInputDTO,
          UpdateDTOClass: ProductUpdateDTO,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
          create: {
            decorators: [
              UseGuards(JwtAuthGuard, RolesGuard),
              Role(UserRole.ADMIN),
            ],
          },
          read: {
            decorators: [
              UseGuards(JwtAuthGuard, RolesGuard),
              Role(UserRole.ADMIN, UserRole.USER),
            ],
          },
          update: {
            decorators: [
              UseGuards(JwtAuthGuard, RolesGuard),
              Role(UserRole.ADMIN),
            ],
          },
          aggregate: {
            decorators: [
              UseGuards(JwtAuthGuard, RolesGuard),
              Role(UserRole.ADMIN),
            ],
          },
          delete: { disabled: true },
        },
      ],
    }),
  ],
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
})
export class ProductModule {}
