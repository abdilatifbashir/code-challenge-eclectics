import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
    findAll(): string;
    findOne(email: any): Promise<User>;
    findOneByID(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    hashPassward(password: string, salt: string): Promise<string>;
}
