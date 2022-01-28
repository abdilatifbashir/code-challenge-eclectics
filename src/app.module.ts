import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanModule } from './loan/loan.module';
import { LoanService } from './loan/loan.service';
import { LoanController } from './loan/loan.controller';
import { Loan } from './loan/entities/loan.entity';
import { Repository } from 'typeorm'
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'loans_db',
      entities: [Loan,User],
      synchronize: true,
    }),
    LoanModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
