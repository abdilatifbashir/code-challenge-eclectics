import { LoanRepayment } from 'src/repayments/entities/LoanRepayment.entity';
import { Loan } from 'src/loan/entities/loan.entity';
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    createdAt: string;
    salt: string;
    validatePassword(password: string): Promise<Boolean>;
    loan: Loan;
    repayment: LoanRepayment;
}
