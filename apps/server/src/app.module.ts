import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { DbModule } from "@/modules/database/db.module";
import { LoggerModule } from "@/modules/logger/logger.module";
import { UserModule } from "@/modules/users/user.module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "..", "client", "dist"),
    }),
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    UserModule,
    LoggerModule,
    DbModule,
  ],
})
export class AppModule {}
