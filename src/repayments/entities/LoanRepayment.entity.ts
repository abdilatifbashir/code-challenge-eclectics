
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Loan } from '../../loan/entities/loan.entity';
import { join } from 'path/posix';

@Entity()
export class LoanRepayment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  emailAdress: string;

  @Column({ nullable: true })
  PhoneNumber: string;

  @Column({ nullable: true })
  AmountPaid: number;

  @OneToOne(() => User,user =>user.repayment)
  user: User;

 @OneToOne(() => Loan,loan => loan.repayment)
 @JoinColumn()
   loan:Loan;
}