import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(
      process.env.MONGODB_HOST,
    ),
    // ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @Module({
//   imports: [
//     PassportModule.register({ session: true }),
//     TypeOrmModule.forRoot({
//       type: 'mongodb',
//       host: process.env.MYSQL_DB_HOST,
//       port: 3306,
//       username: process.env.MYSQL_DB_USERNAME,
//       password: process.env.MYSQL_DB_PASSWORD,
//       database: process.env.MYSQL_DB_DATABASE,
//       synchronize: true,
//       entities: entities,
//     }),
//     AuthModule,
//     UserModule,
//     DiscordModule,
//     GuildsModule,
//     WebSocketModule,
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}