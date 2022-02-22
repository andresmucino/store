import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
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
          guards: [JwtAuthGuard],
          create: { decorators: [Role(UserRole.ADMIN)] },
          read: { decorators: [Role(UserRole.ADMIN)] },
        },
      ],
    }),
  ],
  providers: [ProviderService, ProviderResolver],
  exports: [ProviderService],
})
export class ProviderModule {}
