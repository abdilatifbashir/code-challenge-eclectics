// export class Invoice {}

import { Entity, Column, PrimaryGeneratedColumn , OneToOne} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Loan {
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
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  AmountTBorrow: number;

  @Column()
  streetAddres: string;

  @OneToOne(() => User, (user) => user)
  user: User;
}
