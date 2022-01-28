import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan} from './entities/loan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan) private loanRepository: Repository<Loan>,
  ) {}
  async create(createInvoiceDto: CreateLoanDto) {
    const createLoan = await this.loanRepository.save(createInvoiceDto);
    return {
      invoice: createLoan,
      message: 'loan successfully created',
    };
  }

  async findAll(): Promise<Loan[]> {
    return await this.loanRepository.find();
  }

  async findOne(id: string): Promise<Loan> {
    return await this.loanRepository.findOne(id);
  }

  async update(id: string, updateLoanDto: UpdateLoanDto) {
    // const { ClientEmail } = updateInvoiceDto;
    const invoice = await this.findOne(id);
    if (!invoice) {
      if (!invoice) throw new NotFoundException("loan don't exis");
    }
    const updatedInvoice = await this.loanRepository.save({
      ...invoice,
      ...updateLoanDto,
    });
    return {
      message: 'loan successfully updated',
      updatedInvoice,
    };
  }

  async remove(id: string) {
    try {
      const loan= await this.findOne(id);
      if (!loan) {
        throw new BadRequestException("invoice don't exist");
      }
      const deleteLoan = await this.loanRepository.remove(loan);
      return {
        message: `successfully deleted loan id:${id}`,
        deleteLoan,
      };
    } catch (error) {
      return error;
    }
  }
}
