
// export class Invoice {}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { LoanIssuance } from './loanIssuance.entity';
import {LoanStatus} from "../dto/loan-status"
@Entity()
export class Loan {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  loanId: string;

  @Column({ nullable: true })
  amountToBorrow: number;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updateddAt: string;

  @Column({ nullable: true })
  status: LoanStatus;

  @OneToOne(() => User)
  @JoinColumn()
  userId: User;

  @OneToOne(() => LoanIssuance, (loanIssuance) => loanIssuance.loan)
  @JoinColumn()
  issued: LoanIssuance;
}
