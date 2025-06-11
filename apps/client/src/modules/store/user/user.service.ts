import { ApiPath } from "@/common/enums/enums";
import type { User } from "@/common/types/types";
import { Http } from "@/modules/http/http";
import { HttpMethod } from "@/modules/http/enums/enums";

type Constructor = {
  baseUrl: string;
};

class UserService {
  private baseUrl: string;

  private basePath: string;

  constructor({ baseUrl }: Constructor) {
    this.baseUrl = baseUrl;
    this.basePath = ApiPath.USERS;
  }

  public async get(): Promise<User[]> {
    // if (await this.storage.has(StorageKey.ACCESS_TOKEN)) {
    const response: User[] = await Http.load(this.getUrl(), {
      method: HttpMethod.GET,
      hasAuth: true,
    });

    return response;
    //} throw new Error("Unauthorized user");
  }

  private getUrl(path = ""): string {
    return `${this.baseUrl}${this.basePath}${path}`;
  }
}

export { UserService };
