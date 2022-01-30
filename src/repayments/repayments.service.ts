import { Injectable } from '@nestjs/common';
import { CreateRepaymentDto } from './dto/create-repayment.dto';
import { UpdateRepaymentDto } from './dto/update-repayment.dto';
import { LoanRepayment } from './entities/LoanRepayment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RepaymentsService {

  constructor(@InjectRepository(LoanRepayment) private repaymentRepository:Repository<LoanRepayment>){}

  async  create(createRepaymentDto: CreateRepaymentDto) {
   const repay = await this.repaymentRepository.save(createRepaymentDto)
    return {
      repayment:repay,
      message:"loan succesfully repaid"
    }
  }

  findAll() {
    return `This action returns all repayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repayment`;
  }

  update(id: number, updateRepaymentDto: UpdateRepaymentDto) {
    return `This action updates a #${id} repayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} repayment`;
  }
}

