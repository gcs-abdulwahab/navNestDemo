/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    console.log("UsersController initialized");
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log("CREATE METHOD");
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    console.log("FINDALL METHOD");
    return this.usersService.findAll();
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log('======= PATCH METHOD CALLED =======');
    console.log('ID:', id);
    console.log('UpdateUserDto:', updateUserDto);
    console.log('===================================');
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    console.log("DELETE METHOD for ID:", id);
    return this.usersService.remove(+id);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Query('include') include?: string) {
    console.log("FINDONE METHOD for ID:", id);
    return this.usersService.findOne(+id, include);
  }

  

  

}