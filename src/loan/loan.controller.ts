import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post("apply")
  create(@Body() createInvoiceDto: CreateLoanDto) {
    return this.loanService.create(createInvoiceDto);
  }

  @Get()
  findAll() {
    return this.loanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateLoanDto) {
    return this.loanService.update(id, updateInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanService.remove(id);
  }
}
