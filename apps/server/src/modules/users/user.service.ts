import { Injectable } from "@nestjs/common";

import { User } from "@admin-dashboard/shared";

import { DbService } from "../database/db.service";

@Injectable()
class UserService {
  constructor(private dbService: DbService) {}
  async find(): Promise<User[]> {
    const users = await this.dbService.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        lastName: true,
        organization: true,
        role: true,
        locked: true,
      },
    });
    return users;
  }
}

export { UserService };
