import { Loan } from 'src/loan/entities/loan.entity';
// export class Invoice {}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class LoanIssuance {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  loanIssuanceId: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  emailAdress: string;

  @Column()
  PhoneNumber: string;

  @Column()
  nationalId: string;

  @Column({ nullable: true })
  AmountIssued: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => LoanIssuance, (loanIssuance) => loanIssuance)
  @JoinColumn()
  loan: Loan;
}
