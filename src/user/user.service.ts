import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginUserInput} from "./dto/login-user.input"
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';





@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private authService: AuthService,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }
  async create(data: any) {
    const { email, password } = data;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await this.hashPassward(password, salt);

    try {
      return await this.userRepository.save({
        email: email.toLowerCase(),
        password: hashedPassword,
        salt,
        isVerified: false,
        createdAt: new Date().toISOString().toString(),
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async login(data:any) {
    const { email, password } = data;

    const user = await this.findOne(email);
    if (!(user && (await user.validatePassword(password)))) {
      throw new BadRequestException('Invalid credentials');
    }
    console.log(user,"here is the user")
    console.log('generated tokens', await this.authService.generateJwt(user));

    const payload = {
      token: await this.authService.generateJwt(user),
      message:"successully logged in"
    };

    return payload;
  }

  async updateAccount(updateUser: CreateUserDto): Promise<any> {
    const { email } = updateUser;
    const user = await this.findOne(email);
    if (!user) throw new NotFoundException('User not found');

    return await this.userRepository.save({ ...user, ...updateUser });
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  async findOne(email: any): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async hashPassward(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
