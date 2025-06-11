// import { localStorageApi } from "@/modules/storage/storage";

import { ApiPath } from "@/common/enums/enums";

import { UserService } from "./user.service";
import { userReducer } from "./user-slice";

const apiUrl = ApiPath.API_ORIGIN;

const userService = new UserService({
  baseUrl: apiUrl,
});

export { userService, UserService, userReducer };
