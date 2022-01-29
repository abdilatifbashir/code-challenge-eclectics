import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { Repository } from 'typeorm';
export declare class LoanService {
    private loanRepository;
    constructor(loanRepository: Repository<Loan>);
    create(createInvoiceDto: CreateLoanDto): Promise<{
        loan: CreateLoanDto & Loan;
        message: string;
    }>;
    findAll(): Promise<Loan[]>;
    findOne(id: string): Promise<Loan>;
    update(id: string, updateLoanDto: UpdateLoanDto): Promise<{
        message: string;
        updatedLoan: {
            firstName: string;
            lastName: string;
            emailAdress: string;
            PhoneNumber: string;
            city: string;
            country: string;
            AmountToBorrow?: number;
            id: string;
            AmountTBorrow: number;
            streetAddres: string;
            user: import("../user/entities/user.entity").User;
        } & Loan;
    }>;
    remove(id: string): Promise<any>;
}
