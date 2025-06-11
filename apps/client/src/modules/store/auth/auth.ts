import { localStorageApi } from "@/modules/storage/storage";
import { ApiPath } from "@/common/enums/enums";

import { AuthService } from "./auth.service";
import { authReducer } from "./auth-slice";

const apiUrl = ApiPath.API_ORIGIN;

const authService = new AuthService({
  baseUrl: apiUrl,
  storage: localStorageApi,
});

export { authService, AuthService, authReducer };
