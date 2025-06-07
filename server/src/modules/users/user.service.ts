import { Injectable } from "@nestjs/common";

@Injectable()
class UserService {
  async findByEmail(email: string) {
    return {
      id: "1231-2143-1255125",
      username: "John.812",
      email: "john.doe@gmail.com",
    };
  }
}

export { UserService };
