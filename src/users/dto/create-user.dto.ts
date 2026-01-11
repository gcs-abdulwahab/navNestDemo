/* eslint-disable prettier/prettier */

import { IS_IN, IS_LENGTH, IsEmail, IsNotEmpty, Length } from "class-validator";
import { Department } from "src/department/entities/department.entity";

export class CreateUserDto {
    name: string;
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(6, 20)
    password: string;
    
    role: string;
    
    
    departmentId: number;
    department?: Department;
    createdAt?: Date = new Date()
    updatedAt?: Date = new Date()
}