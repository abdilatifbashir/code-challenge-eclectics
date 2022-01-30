// export class Invoice {}

import { Entity, Column, PrimaryGeneratedColumn , OneToOne,JoinColumn} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { LoanRepayment } from 'src/repayments/entities/LoanRepayment.entity';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

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
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  AmountTBorrow: number;

  @Column()
  streetAddres: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  isApproved: boolean;

  @OneToOne(() => User,user => user.loan)
  @JoinColumn()
  user: User;

  @OneToOne(() => LoanRepayment,repayment => repayment.loan)
  @JoinColumn()
  repayment :LoanRepayment

  
}
