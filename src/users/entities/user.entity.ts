/* eslint-disable prettier/prettier */

import { Department } from "src/department/entities/department.entity";

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;

  departmentId: number;
  //department?:Department;

  createdAt?: Date;
  updatedAt?: Date;

}
