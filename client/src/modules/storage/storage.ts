import { Storage } from "./storage-api.module";

const localStorageApi = new Storage({
  storage: typeof window !== "undefined" ? localStorage : null,
});

const sessionStorageApi = new Storage({
  storage: typeof window !== "undefined" ? sessionStorage : null,
});

export { localStorageApi, sessionStorageApi, Storage };
