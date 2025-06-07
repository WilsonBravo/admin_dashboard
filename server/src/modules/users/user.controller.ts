import { Controller, Get } from "@nestjs/common";

import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("")
  async findByEmail() {
    const user = await this.userService.findByEmail("");
    return user;
  }
}
