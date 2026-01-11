/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, OnModuleInit  } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { InMemoryDatabase } from "src/database/in-memory-database";


@Injectable()
export class UsersService implements OnModuleInit {

  constructor(private readonly database: InMemoryDatabase
  ) {

    console.log('user service  constructor')
  }

  onModuleInit() {
      console.log('user module is initiated')
  }


  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: Date.now(), // Simple unique ID generation
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.database.getUsers().push(newUser);
    
    return newUser;
  }

  findAll() {
    return this.database.getUsers();
  }

  findOne(userid: number , include?: string):User | undefined {
    const user =  this.database.getUserById(userid);
    if (!user){
      throw new NotFoundException(`User with id #${userid} not found`);
    }
    if (user && include === 'department') {
      const department = this.database.getDepartmentById(user.departmentId);
      return { ...user, department };
    }
    return user;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
   
   console.log('update method')
    const user = this.database.getUsers().find((user) => user.id === id);
    console.log(user)
    if (user) {
      Object.assign(user, updateUserDto);
      this.database.getUsers()[this.database.getUsers().findIndex((u) => u.id === id)] = user;
      return user;
    }
  }

  remove(id: number) {
    const index = this.database.getUsers().findIndex((user) => user.id === id);
    if (index !== -1) {
      this.database.getUsers().splice(index, 1);
      return `User with id #${id} has been removed.`;
    }
  }

  findByUsername(username: string): User | undefined {
    return this.database.getUsers().find(user => user.name === username);
  }


}
