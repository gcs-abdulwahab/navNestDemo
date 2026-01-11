import { Global, Module } from "@nestjs/common";
import { SeedingService } from "./seeding.service";
import { InMemoryDatabase } from "./in-memory-database";

@Global()
@Module({
  providers: [InMemoryDatabase, SeedingService],
  exports: [InMemoryDatabase],
})
export class DatabaseModule {}
