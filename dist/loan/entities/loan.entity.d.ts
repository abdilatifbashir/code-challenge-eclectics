import { User } from 'src/user/entities/user.entity';
export declare class Loan {
    id: string;
    firstName: string;
    lastName: string;
    emailAdress: string;
    PhoneNumber: string;
    city: string;
    country: string;
    AmountTBorrow: number;
    streetAddres: string;
    user: User;
}
