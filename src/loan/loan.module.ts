import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity'
import { LoanIssuance } from './entities/loanIssuance.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Loan,LoanIssuance])],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}
