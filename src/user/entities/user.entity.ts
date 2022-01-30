
import { Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn} from 'typeorm';
import * as bcrypt from 'bcrypt';
// import {  Loan} from 'src/loan/entities/loan.entity';
import { Loan } from 'src/loan/entities/loan.entity';
import { LoanIssuance } from 'src/loan/entities/loanIssuance.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: true, unique: true })
  phoneNumber: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  salt: string;

  async validatePassword(password: string): Promise<Boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash == this.password;
  }

  // @OneToOne(() => Loan, (loan) => loan.user, { onDelete: 'CASCADE' })
  // @JoinColumn()
  // loan: Loan;

  // @OneToOne(() => LoanRepayment, (repayment) => repayment.user)
  // repayment: LoanRepayment;

  @OneToOne(() => LoanIssuance, (loanIssuance) => loanIssuance.user)
  issued: LoanIssuance;
}