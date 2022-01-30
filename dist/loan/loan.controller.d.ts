import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
export declare class LoanController {
    private readonly loanService;
    constructor(loanService: LoanService);
    create(id: any, createInvoiceDto: CreateLoanDto): Promise<{
        loan: {
            userId: any;
            createdAt: string;
            updateddAt: string;
            amountToBorrow: number;
            status: import("./dto/loan-status").LoanStatus;
        } & import("./entities/loan.entity").Loan;
        message: string;
    }>;
    findAll(): Promise<import("./entities/loan.entity").Loan[]>;
    findOne(id: string): Promise<import("./entities/loan.entity").Loan>;
    remove(id: string): Promise<any>;
}
