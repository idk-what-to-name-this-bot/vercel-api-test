import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_HOST,
    ),
    // ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [],
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