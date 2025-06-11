import { localStorageApi } from "@/modules/storage/storage";

import { AuthService } from "./auth.service";
import { authReducer } from "./auth-slice";

const apiUrl = import.meta.env.VITE_API_ORIGIN ?? "";

const authService = new AuthService({
  baseUrl: apiUrl,
  storage: localStorageApi,
});

export { authService, AuthService, authReducer };
