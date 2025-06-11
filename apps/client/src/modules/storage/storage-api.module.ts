import { StorageKey } from "@/common/enums/enums";
import { type ValueOf } from "@/common/types/types";

type Constructor = {
  storage: globalThis.Storage | null;
};

class Storage {
  private storage: globalThis.Storage | null;

  public constructor({ storage }: Constructor) {
    this.storage = storage;
  }

  public clear(): Promise<void> {
    (this.storage as globalThis.Storage).clear();

    return Promise.resolve();
  }

  public drop(key: ValueOf<typeof StorageKey>): void {
    (this.storage as globalThis.Storage).removeItem(key as string);
  }

  public get<R = string>(key: ValueOf<typeof StorageKey>): R | null {
    return (this.storage as globalThis.Storage).getItem(key as string) as R;
  }

  public has(key: ValueOf<typeof StorageKey>): boolean {
    const value = this.get(key);

    return Boolean(value);
  }

  public set(key: ValueOf<typeof StorageKey>, value: string): void {
    (this.storage as globalThis.Storage).setItem(key as string, value);
  }
}

export { Storage };
