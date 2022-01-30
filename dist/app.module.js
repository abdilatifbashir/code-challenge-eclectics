"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("./config/database.config");
const typeorm_1 = require("@nestjs/typeorm");
const loan_module_1 = require("./loan/loan.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const repayments_module_1 = require("./repayments/repayments.module");
require('dotenv').config();
const dotenv = require("dotenv");
const config_1 = require("@nestjs/config");
const config_2 = require("./config/config");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [config_2.config],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: database_config_1.DatabaseConfig,
            }),
            loan_module_1.LoanModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            repayments_module_1.RepaymentsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map