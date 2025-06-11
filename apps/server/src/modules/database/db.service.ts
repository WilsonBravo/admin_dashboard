import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../../../generated/prisma";

@Injectable()
class DbService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

export { DbService };
