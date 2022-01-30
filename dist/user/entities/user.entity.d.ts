import { LoanIssuance } from 'src/loan/entities/loanIssuance.entity';
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    city: string;
    password: string;
    createdAt: string;
    salt: string;
    validatePassword(password: string): Promise<Boolean>;
    issued: LoanIssuance;
}
