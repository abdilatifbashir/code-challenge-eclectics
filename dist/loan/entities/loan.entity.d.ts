import { User } from 'src/user/entities/user.entity';
import { LoanIssuance } from './loanIssuance.entity';
import { LoanStatus } from "../dto/loan-status";
export declare class Loan {
    loanId: string;
    amountToBorrow: number;
    createdAt: string;
    updateddAt: string;
    status: LoanStatus;
    userId: User;
    issued: LoanIssuance;
}
