// import { RolesGuard } from './../auth/strategies/jwt-guard.auth';
import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

// import { AuthGuard } from '@nestjs/passport'


@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post('apply/:id', )
  async create( @Param('id') id:any, @Body() createInvoiceDto: CreateLoanDto) {
    return await this.loanService.create(createInvoiceDto,id);
  }

  // @Post("repay")
  // repayLoan(@Body() data:any){
  //   return this.loanService.repayLoan(data)
  // }
  // @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.loanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateLoanDto) {
  //   return this.loanService.update(id, updateInvoiceDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanService.remove(id);
  }
}
