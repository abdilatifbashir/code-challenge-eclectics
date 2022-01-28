"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../auth/auth.service");
let UserService = class UserService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async create(data) {
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
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async login(data) {
        const { email, password } = data;
        const user = await this.findOne(email);
        if (!(user && (await user.validatePassword(password)))) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
        console.log(user, "here is the user");
        const payload = {
            token: this.authService.generateJwt(user),
            message: "successully logged in"
        };
        return payload;
    }
    async updateAccount(updateUser) {
        const { email } = updateUser;
        const user = await this.findOne(email);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return await this.userRepository.save(Object.assign(Object.assign({}, user), updateUser));
    }
    findAll() {
        return `This action returns all user`;
    }
    async findOne(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        return user;
    }
    async findOneByID(email) {
        return this.userRepository.findOne({ email });
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async hashPassward(password, salt) {
        return await bcrypt.hash(password, salt);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map