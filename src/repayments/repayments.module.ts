import { Module } from '@nestjs/common';
import { RepaymentsService } from './repayments.service';
import { RepaymentsController } from './repayments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanRepayment } from './entities/LoanRepayment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LoanRepayment])],
  controllers: [RepaymentsController],
  providers: [RepaymentsService]
})
export class RepaymentsModule {}
