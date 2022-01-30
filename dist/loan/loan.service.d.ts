import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { Repository } from 'typeorm';
export declare class LoanService {
    private loanRepository;
    constructor(loanRepository: Repository<Loan>);
    create(createLoanDto: CreateLoanDto): Promise<{
        loan: {
            isApproved: false;
            isPaid: boolean;
            createdAt: string;
            firstName: string;
            lastName: string;
            emailAdress: string;
            phoneNumber: string;
            city: string;
            country: string;
            amountToBorrow: number;
            nationalId: string;
        } & Loan;
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
            phoneNumber?: string;
            city: string;
            country: string;
            amountToBorrow?: number;
            nationalId: string;
            id: string;
            PhoneNumber: string;
            AmountTBorrow: number;
            streetAddres: string;
            createdAt: string;
            isApproved: boolean;
            user: import("../user/entities/user.entity").User;
            repayment: import("../repayments/entities/LoanRepayment.entity").LoanRepayment;
        } & Loan;
    }>;
    remove(id: string): Promise<any>;
}
