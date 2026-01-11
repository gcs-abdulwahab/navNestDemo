import { Injectable, OnModuleInit } from "@nestjs/common";
import { InMemoryDatabase } from "./in-memory-database";
import { Department } from "../department/entities/department.entity";
import { User } from "../users/entities/user.entity";

@Injectable()
export class SeedingService implements OnModuleInit {
  constructor(private readonly database: InMemoryDatabase) {}

  onModuleInit() {
    // Seed initial data here
    this.seed();
  }

  private seed() {
    console.log("Seeding initial data...");

    // Create departments
    const departments: Department[] = [
      new Department({
        id: 1,
        name: "Engineering",
        description: "Software development and engineering team",
      }),
      new Department({
        id: 2,
        name: "Marketing",
        description: "Marketing and communication team",
      }),
      new Department({
        id: 3,
        name: "Sales",
        description: "Sales and business development team",
      }),
    ];

    // Create users for each department
    const users: User[] = [
      // Engineering Department (id: 1)
      {
        id: 1,
        name: "John Smith",
        email: "john.smith@company.com",
        password: "admin123",
        role: "admin",
        departmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.johnson@company.com",
        password: "user123",
        role: "user",
        departmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Mike Wilson",
        email: "mike.wilson@company.com",
        password: "user123",
        role: "user",
        departmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Emily Davis",
        email: "emily.davis@company.com",
        password: "user123",
        role: "user",
        departmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "David Brown",
        email: "david.brown@company.com",
        password: "user123",
        role: "user",
        departmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Marketing Department (id: 2)
      {
        id: 6,
        name: "Lisa Anderson",
        email: "lisa.anderson@company.com",
        password: "admin123",
        role: "admin",
        departmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Tom Martinez",
        email: "tom.martinez@company.com",
        password: "user123",
        role: "user",
        departmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Jennifer Taylor",
        email: "jennifer.taylor@company.com",
        password: "user123",
        role: "user",
        departmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "Robert Garcia",
        email: "robert.garcia@company.com",
        password: "user123",
        role: "user",
        departmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: "Amy Rodriguez",
        email: "amy.rodriguez@company.com",
        password: "user123",
        role: "user",
        departmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Sales Department (id: 3)
      {
        id: 11,
        name: "Chris Lee",
        email: "chris.lee@company.com",
        password: "admin123",
        role: "admin",
        departmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: "Michelle White",
        email: "michelle.white@company.com",
        password: "user123",
        role: "user",
        departmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: "Kevin Harris",
        email: "kevin.harris@company.com",
        password: "user123",
        role: "user",
        departmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        name: "Laura Clark",
        email: "laura.clark@company.com",
        password: "user123",
        role: "user",
        departmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: "James Lewis",
        email: "james.lewis@company.com",
        password: "user123",
        role: "user",
        departmentId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Seed data into the database
    this.database.seedDepartments(departments);
    this.database.seedUsers(users);

    console.log(`Seeded ${departments.length} departments`);
    console.log(`Seeded ${users.length} users`);
    console.log("Seeding completed successfully!");
  }
}
