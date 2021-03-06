import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {LoginUserInput} from "./dto/login-user.input"

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Post("/login")
   async login(@Body() loginUserInput: LoginUserInput) {
    return await this.userService.login(loginUserInput);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  
}
