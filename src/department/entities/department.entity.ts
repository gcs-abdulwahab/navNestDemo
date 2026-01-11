import { User } from "src/users/entities/user.entity";

export class Department {
  id: number;
  name: string;
  description?: string;
  //users?: User[];
  createdAt?: Date;
  updatedAt?: Date;

  constructor(partial: Partial<Department>) {
    Object.assign(this, partial);
    this.createdAt = this.createdAt || new Date();
    this.updatedAt = this.updatedAt || new Date();
  }
}
