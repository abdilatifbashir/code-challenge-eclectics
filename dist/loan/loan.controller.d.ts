import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
export declare class LoanController {
    private readonly loanService;
    constructor(loanService: LoanService);
    create(createInvoiceDto: CreateLoanDto): unknown;
    findAll(): Promise<{}>;
    findOne(id: string): Promise<import("./entities/loan.entity").Loan>;
    update(id: string, updateInvoiceDto: UpdateLoanDto): unknown;
    remove(id: string): unknown;
}
