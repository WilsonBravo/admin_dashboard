import { Injectable } from "@nestjs/common";
import { User } from "generated/prisma";
import { DbService } from "../database/db.service";

@Injectable()
class UserService {
  constructor(private dbService: DbService) {}
  async find(): User[] {
    const users = await this.dbService.user.findAll();
    return users;
  }
}

export { UserService };
