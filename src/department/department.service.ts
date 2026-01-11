/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { InMemoryDatabase } from "src/database/in-memory-database";

@Injectable()
export class DepartmentService {
  constructor(private readonly database: InMemoryDatabase) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    const newDepartment = {
      id: this.database.getDepartments().length + 1,
      ...createDepartmentDto,
    };
    this.database.getDepartments().push(newDepartment);
    return newDepartment;
  }

  findAll() {
    return this.database.getDepartments();
  }

  findOne(id: number) {
    const department = this.database.getDepartmentById(id);
    if (!department) {
      return new NotFoundException(`Department with id ${id} not found`);
    }
    return department;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }

  findUsersByDepartment(id: number) {
    const users = this.database.getUsers();
    return this.database.getUsersByDepartmentId(id);
  }
}
