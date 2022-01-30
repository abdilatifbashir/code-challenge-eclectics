import { LoanStatus } from "./loan-status";
export declare class CreateLoanDto {
    userId: string;
    amountToBorrow: number;
    status: LoanStatus;
}
