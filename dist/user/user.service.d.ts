import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
export declare class UserService {
    private readonly userRepository;
    private authService;
    constructor(userRepository: Repository<User>, authService: AuthService);
    create(data: any): Promise<any>;
    login(data: any): Promise<{
        token: string;
        message: string;
    }>;
    updateAccount(updateUser: CreateUserDto): Promise<any>;
    findAll(): Promise<User[]>;
    findOne(email: any): Promise<User>;
    hashPassward(password: string, salt: string): Promise<string>;
}
