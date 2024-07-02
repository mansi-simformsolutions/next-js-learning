// better-sqlite3.d.ts
declare module "better-sqlite3" {
  interface Options {
    memory?: boolean;
    readonly?: boolean;
    fileMustExist?: boolean;
    timeout?: number;
    verbose?: (message?: any, ...optionalParams: any[]) => void;
  }

  interface Statement {
    run(...params: any[]): { changes: number; lastInsertRowid: number };
    get(...params: any[]): any;
    all(...params: any[]): any[];
    iterate(...params: any[]): IterableIterator<any>;
    pluck(toggleState?: boolean): this;
    bind(...params: any[]): this;
  }

  interface Database {
    prepare(source: string): Statement;
    transaction(source: (...params: any[]) => any): (...params: any[]) => any;
    exec(source: string): this;
    pragma(source: string, options?: { simple: boolean }): any;
    checkpoint(databaseName?: string): this;
    close(): void;
    defaultSafeIntegers(toggleState?: boolean): this;
  }

  function Database(filename: string, options?: Options): Database;

  export = Database;
}
