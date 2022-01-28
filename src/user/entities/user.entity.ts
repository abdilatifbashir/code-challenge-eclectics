
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

  @Column({nullable:false})
  password: string;
  
  @Column({nullable:true})
  createdAt:string;  
    
  @Column({nullable: true})
  salt:string;

  @Column({nullable: true})
  code:number;

  @Column({default:false, nullable:false})
  isVerified:Boolean;

  @Column({nullable:true})
  resetCode:number

  async validatePassword(password:string):Promise<Boolean>{
   const hash = await bcrypt.hash(password,this.salt)
   return hash== this.password;
  }
}