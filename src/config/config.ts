import { Auth } from 'src/auth/entities/auth.entity';
import { User } from '../user/entities/user.entity';
import { Loan } from 'src/loan/entities/loan.entity';
import { LoanIssuance } from 'src/loan/entities/loanIssuance.entity';


export const config = () => ({
  port: parseInt(process.env.PORT) || 3000,
  jwtSecret: process.env.JWT_SECRET,
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
      User,
      Auth,
      Loan,
    
      LoanIssuance
    
    ],
  },
});


