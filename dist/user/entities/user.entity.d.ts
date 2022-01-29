export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    createdAt: string;
    salt: string;
    validatePassword(password: string): Promise<Boolean>;
}
