import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';
// import { InvoiceService } from './invoice.service';

@Module({
  imports:[TypeOrmModule.forFeature([Loan])],
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}
