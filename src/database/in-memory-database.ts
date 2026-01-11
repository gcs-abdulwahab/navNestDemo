/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "../users/entities/user.entity";
import { Department } from "../department/entities/department.entity";

@Injectable()
export class InMemoryDatabase {

    
    private users: User[] = [];

    
// Users methods
  getUsers(): User[] {
    return this.users;
  }


  addUser(user: User): void {
    this.users.push(user);
  }

 getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

removeUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }


  getUsersCount(): number {
    return this.users.length;
  }










  private departments: Department[] = [];

  
  getUsersByDepartmentId(departmentId: number): User[] {
    return this.users.filter((user) => user.departmentId === departmentId);
  }





  seedUsers(users: User[]): void {
    
    this.users = users;
  }











  // Departments methods
  getDepartments(): Department[] {
    return this.departments;
  }
  getDepartmentById(id: number): Department | undefined {
    return this.departments.find((dept) => dept.id === id);
  }

  addDepartment(department: Department): void {
    this.departments.push(department);
  }

  seedDepartments(departments: Department[]): void {
    this.departments = departments;
  }
}
