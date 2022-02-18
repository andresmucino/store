import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config, { GqlContext } from './config';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import { CustomerModule } from './modules/customers/customer.module';
import { OrderModule } from './modules/orders/order.module';
import { ProductModule } from './modules/products/product.module';
import { ProviderModule } from './modules/providers/provider.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      introspection: true,
      playground: true,
      // subscriptions: {
      //   'subscriptions-transport-ws': {
      //     onConnect: (connectionParams: unknown) => ({
      //       headers: connectionParams,
      //     }),
      //   },
      // },
      context: ({
        req,
      }: {
        req: { headers: Record<string, string> };
      }): GqlContext => ({ request: req }),
    }),
    ProductModule,
    CustomerModule,
    ProviderModule,
    // OrderModule,
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
