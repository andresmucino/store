import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module, UseGuards } from '@nestjs/common';
import { ProviderDTO } from './dto/provider.dto';
import { ProviderEntity } from './entities/provider.entity';
import { ProviderService } from './provider.service';
import { ProviderResolver } from './provider.resolver';
import { ProviderInputDTO } from './dto/provider-input.dto';
import { UserModule } from '../user/user.module';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProviderUpdateDTO } from './dto/provider-update.dto';
import { Role } from 'src/auth/decorators/role.decorator';
import { UserRole } from '../user/entities/user.entity';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Module({
  imports: [
    UserModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([ProviderEntity]),
        UserModule,
      ],
      services: [ProviderService],
      resolvers: [
        {
          DTOClass: ProviderDTO,
          EntityClass: ProviderEntity,
          CreateDTOClass: ProviderInputDTO,
          UpdateDTOClass: ProviderUpdateDTO,
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
              Role(UserRole.ADMIN),
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
  providers: [ProviderService, ProviderResolver],
  exports: [ProviderService],
})
export class ProviderModule {}
