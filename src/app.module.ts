
import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanModule } from './loan/loan.module';
import { LoanService } from './loan/loan.service';
import { LoanController } from './loan/loan.controller';
import { Loan } from './loan/entities/loan.entity';
import { Repository } from 'typeorm'
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module'
require('dotenv').config();
import * as dotenv from "dotenv"
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config/config';


dotenv.config()


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    LoanModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
