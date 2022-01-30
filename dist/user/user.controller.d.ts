import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserInput } from "./dto/login-user.input";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<any>;
    login(loginUserInput: LoginUserInput): Promise<{
        token: string;
        message: string;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
}
