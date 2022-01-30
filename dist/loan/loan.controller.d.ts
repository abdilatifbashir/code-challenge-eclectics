import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
export declare class LoanController {
    private readonly loanService;
    constructor(loanService: LoanService);
    create(createInvoiceDto: CreateLoanDto): Promise<{
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
        } & import("./entities/loan.entity").Loan;
        message: string;
    }>;
    findAll(): Promise<import("./entities/loan.entity").Loan[]>;
    findOne(id: string): Promise<import("./entities/loan.entity").Loan>;
    update(id: string, updateInvoiceDto: UpdateLoanDto): Promise<{
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
        } & import("./entities/loan.entity").Loan;
    }>;
    remove(id: string): Promise<any>;
}
