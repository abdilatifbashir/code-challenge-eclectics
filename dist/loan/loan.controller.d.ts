import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
export declare class LoanController {
    private readonly loanService;
    constructor(loanService: LoanService);
    create(createInvoiceDto: CreateLoanDto): Promise<{
        loan: CreateLoanDto & import("./entities/loan.entity").Loan;
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
            PhoneNumber: string;
            city: string;
            country: string;
            AmountToBorrow?: number;
            id: string;
            AmountTBorrow: number;
            streetAddres: string;
            user: import("../user/entities/user.entity").User;
        } & import("./entities/loan.entity").Loan;
    }>;
    remove(id: string): Promise<any>;
}
