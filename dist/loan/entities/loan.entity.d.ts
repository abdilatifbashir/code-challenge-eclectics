import { User } from 'src/user/entities/user.entity';
import { LoanRepayment } from 'src/repayments/entities/LoanRepayment.entity';
export declare class Loan {
    id: string;
    firstName: string;
    lastName: string;
    emailAdress: string;
    PhoneNumber: string;
    nationalId: string;
    city: string;
    country: string;
    AmountTBorrow: number;
    streetAddres: string;
    createdAt: string;
    isApproved: boolean;
    user: User;
    repayment: LoanRepayment;
}
