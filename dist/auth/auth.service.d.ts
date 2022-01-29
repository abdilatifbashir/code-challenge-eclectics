import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateJwt(user: User): Promise<string>;
}
