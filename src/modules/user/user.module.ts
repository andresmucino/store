import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Module({
  providers: [UserResolver, UserService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
      resolvers: [
        {
          DTOClass: UserDto,
          EntityClass: UserEntity,
          enableAggregate: true,
          enableTotalCount: true,
          enableSubscriptions: false,
        },
      ],
    }),
  ],
  exports: [UserService],
})
export class UserModule {}
