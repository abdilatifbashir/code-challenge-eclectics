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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const loan_entity_1 = require("./entities/loan.entity");
const typeorm_2 = require("typeorm");
let LoanService = class LoanService {
    constructor(loanRepository) {
        this.loanRepository = loanRepository;
    }
    async create(createInvoiceDto) {
        const createLoan = await this.loanRepository.save(createInvoiceDto);
        return {
            loan: createLoan,
            message: 'loan successfully created',
        };
    }
    async findAll() {
        return await this.loanRepository.find();
    }
    async findOne(id) {
        return await this.loanRepository.findOne(id);
    }
    async update(id, updateLoanDto) {
        const loan = await this.findOne(id);
        if (!loan) {
            if (!loan)
                throw new common_1.NotFoundException("loan don't exis");
        }
        const updatedLoan = await this.loanRepository.save(Object.assign(Object.assign({}, loan), updateLoanDto));
        return {
            message: 'loan successfully updated',
            updatedLoan,
        };
    }
    async remove(id) {
        try {
            const loan = await this.findOne(id);
            if (!loan) {
                throw new common_1.BadRequestException("invoice don't exist");
            }
            const deleteLoan = await this.loanRepository.remove(loan);
            return {
                message: `successfully deleted loan id:${id}`,
                deleteLoan,
            };
        }
        catch (error) {
            return error;
        }
    }
};
LoanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loan_entity_1.Loan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoanService);
exports.LoanService = LoanService;
//# sourceMappingURL=loan.service.js.map