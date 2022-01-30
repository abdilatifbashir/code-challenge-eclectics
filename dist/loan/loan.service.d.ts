import { CreateLoanDto } from './dto/create-loan.dto';
import { Loan } from './entities/loan.entity';
import { Repository } from 'typeorm';
export declare class LoanService {
    private loanRepository;
    constructor(loanRepository: Repository<Loan>);
    create(userId: any, createLoanDto: CreateLoanDto): Promise<{
        loan: {
            userId: any;
            createdAt: string;
            updateddAt: string;
            amountToBorrow: number;
            status: import("./dto/loan-status").LoanStatus;
        } & Loan;
        message: string;
    }>;
    findAll(): Promise<Loan[]>;
    findOne(id: string): Promise<Loan>;
    remove(id: string): Promise<any>;
}
