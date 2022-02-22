import { Module, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { UserEntity, UserRole } from './entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { UserInputDTO } from './dto/user-input.dto';
import { UserUpdateDTO } from './dto/user-update.dto';
import { Role } from 'src/auth/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Module({
  providers: [UserResolver, UserService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
      resolvers: [
        {
          DTOClass: UserDTO,
          EntityClass: UserEntity,
          CreateDTOClass: UserInputDTO,
          UpdateDTOClass: UserUpdateDTO,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
          update: {
            decorators: [
              Role(UserRole.ADMIN),
              UseGuards(JwtAuthGuard, RolesGuard),
            ],
          },
          read: {
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
  exports: [UserService],
})
export class UserModule {}
