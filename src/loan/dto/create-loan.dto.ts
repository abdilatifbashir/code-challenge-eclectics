import { LoanStatus } from "./loan-status";
export class CreateLoanDto {
  userId: string;
  amountToBorrow: number;
  status: LoanStatus;
}
