
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VisualState
 * 
 */
export type VisualState = $Result.DefaultSelection<Prisma.$VisualStatePayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model Interaction
 * 
 */
export type Interaction = $Result.DefaultSelection<Prisma.$InteractionPayload>
/**
 * Model DJ
 * 
 */
export type DJ = $Result.DefaultSelection<Prisma.$DJPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visualState`: Exposes CRUD operations for the **VisualState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisualStates
    * const visualStates = await prisma.visualState.findMany()
    * ```
    */
  get visualState(): Prisma.VisualStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interaction`: Exposes CRUD operations for the **Interaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interactions
    * const interactions = await prisma.interaction.findMany()
    * ```
    */
  get interaction(): Prisma.InteractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dJ`: Exposes CRUD operations for the **DJ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DJS
    * const dJS = await prisma.dJ.findMany()
    * ```
    */
  get dJ(): Prisma.DJDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VisualState: 'VisualState',
    Vote: 'Vote',
    Interaction: 'Interaction',
    DJ: 'DJ'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "visualState" | "vote" | "interaction" | "dJ"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VisualState: {
        payload: Prisma.$VisualStatePayload<ExtArgs>
        fields: Prisma.VisualStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisualStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisualStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>
          }
          findFirst: {
            args: Prisma.VisualStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisualStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>
          }
          findMany: {
            args: Prisma.VisualStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>[]
          }
          create: {
            args: Prisma.VisualStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>
          }
          createMany: {
            args: Prisma.VisualStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisualStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>[]
          }
          delete: {
            args: Prisma.VisualStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>
          }
          update: {
            args: Prisma.VisualStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>
          }
          deleteMany: {
            args: Prisma.VisualStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisualStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisualStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>[]
          }
          upsert: {
            args: Prisma.VisualStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualStatePayload>
          }
          aggregate: {
            args: Prisma.VisualStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisualState>
          }
          groupBy: {
            args: Prisma.VisualStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisualStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisualStateCountArgs<ExtArgs>
            result: $Utils.Optional<VisualStateCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      Interaction: {
        payload: Prisma.$InteractionPayload<ExtArgs>
        fields: Prisma.InteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findFirst: {
            args: Prisma.InteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findMany: {
            args: Prisma.InteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          create: {
            args: Prisma.InteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          createMany: {
            args: Prisma.InteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          delete: {
            args: Prisma.InteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          update: {
            args: Prisma.InteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          deleteMany: {
            args: Prisma.InteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          upsert: {
            args: Prisma.InteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          aggregate: {
            args: Prisma.InteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteraction>
          }
          groupBy: {
            args: Prisma.InteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InteractionCountArgs<ExtArgs>
            result: $Utils.Optional<InteractionCountAggregateOutputType> | number
          }
        }
      }
      DJ: {
        payload: Prisma.$DJPayload<ExtArgs>
        fields: Prisma.DJFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DJFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DJFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>
          }
          findFirst: {
            args: Prisma.DJFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DJFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>
          }
          findMany: {
            args: Prisma.DJFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>[]
          }
          create: {
            args: Prisma.DJCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>
          }
          createMany: {
            args: Prisma.DJCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DJCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>[]
          }
          delete: {
            args: Prisma.DJDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>
          }
          update: {
            args: Prisma.DJUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>
          }
          deleteMany: {
            args: Prisma.DJDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DJUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DJUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>[]
          }
          upsert: {
            args: Prisma.DJUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DJPayload>
          }
          aggregate: {
            args: Prisma.DJAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDJ>
          }
          groupBy: {
            args: Prisma.DJGroupByArgs<ExtArgs>
            result: $Utils.Optional<DJGroupByOutputType>[]
          }
          count: {
            args: Prisma.DJCountArgs<ExtArgs>
            result: $Utils.Optional<DJCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    visualState?: VisualStateOmit
    vote?: VoteOmit
    interaction?: InteractionOmit
    dJ?: DJOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    votes: number
    interactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | UserCountOutputTypeCountVotesArgs
    interactions?: boolean | UserCountOutputTypeCountInteractionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    voteCount: number | null
  }

  export type UserSumAggregateOutputType = {
    voteCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nickname: string | null
    joinedAt: Date | null
    lastActive: Date | null
    voteCount: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
    joinedAt: Date | null
    lastActive: Date | null
    voteCount: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nickname: number
    joinedAt: number
    lastActive: number
    voteCount: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    voteCount?: true
  }

  export type UserSumAggregateInputType = {
    voteCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nickname?: true
    joinedAt?: true
    lastActive?: true
    voteCount?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nickname?: true
    joinedAt?: true
    lastActive?: true
    voteCount?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nickname?: true
    joinedAt?: true
    lastActive?: true
    voteCount?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nickname: string | null
    joinedAt: Date
    lastActive: Date
    voteCount: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    joinedAt?: boolean
    lastActive?: boolean
    voteCount?: boolean
    votes?: boolean | User$votesArgs<ExtArgs>
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    joinedAt?: boolean
    lastActive?: boolean
    voteCount?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    joinedAt?: boolean
    lastActive?: boolean
    voteCount?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nickname?: boolean
    joinedAt?: boolean
    lastActive?: boolean
    voteCount?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "joinedAt" | "lastActive" | "voteCount", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | User$votesArgs<ExtArgs>
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      votes: Prisma.$VotePayload<ExtArgs>[]
      interactions: Prisma.$InteractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nickname: string | null
      joinedAt: Date
      lastActive: Date
      voteCount: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interactions<T extends User$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly joinedAt: FieldRef<"User", 'DateTime'>
    readonly lastActive: FieldRef<"User", 'DateTime'>
    readonly voteCount: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User.interactions
   */
  export type User$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VisualState
   */

  export type AggregateVisualState = {
    _count: VisualStateCountAggregateOutputType | null
    _avg: VisualStateAvgAggregateOutputType | null
    _sum: VisualStateSumAggregateOutputType | null
    _min: VisualStateMinAggregateOutputType | null
    _max: VisualStateMaxAggregateOutputType | null
  }

  export type VisualStateAvgAggregateOutputType = {
    id: number | null
    speed: number | null
    intensity: number | null
    activeUsers: number | null
  }

  export type VisualStateSumAggregateOutputType = {
    id: number | null
    speed: number | null
    intensity: number | null
    activeUsers: number | null
  }

  export type VisualStateMinAggregateOutputType = {
    id: number | null
    activeTheme: string | null
    speed: number | null
    intensity: number | null
    colorScheme: string | null
    activeUsers: number | null
    lastUpdated: Date | null
  }

  export type VisualStateMaxAggregateOutputType = {
    id: number | null
    activeTheme: string | null
    speed: number | null
    intensity: number | null
    colorScheme: string | null
    activeUsers: number | null
    lastUpdated: Date | null
  }

  export type VisualStateCountAggregateOutputType = {
    id: number
    activeTheme: number
    speed: number
    intensity: number
    colorScheme: number
    effectIds: number
    activeUsers: number
    lastUpdated: number
    _all: number
  }


  export type VisualStateAvgAggregateInputType = {
    id?: true
    speed?: true
    intensity?: true
    activeUsers?: true
  }

  export type VisualStateSumAggregateInputType = {
    id?: true
    speed?: true
    intensity?: true
    activeUsers?: true
  }

  export type VisualStateMinAggregateInputType = {
    id?: true
    activeTheme?: true
    speed?: true
    intensity?: true
    colorScheme?: true
    activeUsers?: true
    lastUpdated?: true
  }

  export type VisualStateMaxAggregateInputType = {
    id?: true
    activeTheme?: true
    speed?: true
    intensity?: true
    colorScheme?: true
    activeUsers?: true
    lastUpdated?: true
  }

  export type VisualStateCountAggregateInputType = {
    id?: true
    activeTheme?: true
    speed?: true
    intensity?: true
    colorScheme?: true
    effectIds?: true
    activeUsers?: true
    lastUpdated?: true
    _all?: true
  }

  export type VisualStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisualState to aggregate.
     */
    where?: VisualStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualStates to fetch.
     */
    orderBy?: VisualStateOrderByWithRelationInput | VisualStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisualStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisualStates
    **/
    _count?: true | VisualStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisualStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisualStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisualStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisualStateMaxAggregateInputType
  }

  export type GetVisualStateAggregateType<T extends VisualStateAggregateArgs> = {
        [P in keyof T & keyof AggregateVisualState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisualState[P]>
      : GetScalarType<T[P], AggregateVisualState[P]>
  }




  export type VisualStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisualStateWhereInput
    orderBy?: VisualStateOrderByWithAggregationInput | VisualStateOrderByWithAggregationInput[]
    by: VisualStateScalarFieldEnum[] | VisualStateScalarFieldEnum
    having?: VisualStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisualStateCountAggregateInputType | true
    _avg?: VisualStateAvgAggregateInputType
    _sum?: VisualStateSumAggregateInputType
    _min?: VisualStateMinAggregateInputType
    _max?: VisualStateMaxAggregateInputType
  }

  export type VisualStateGroupByOutputType = {
    id: number
    activeTheme: string
    speed: number
    intensity: number
    colorScheme: string
    effectIds: JsonValue
    activeUsers: number
    lastUpdated: Date
    _count: VisualStateCountAggregateOutputType | null
    _avg: VisualStateAvgAggregateOutputType | null
    _sum: VisualStateSumAggregateOutputType | null
    _min: VisualStateMinAggregateOutputType | null
    _max: VisualStateMaxAggregateOutputType | null
  }

  type GetVisualStateGroupByPayload<T extends VisualStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisualStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisualStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisualStateGroupByOutputType[P]>
            : GetScalarType<T[P], VisualStateGroupByOutputType[P]>
        }
      >
    >


  export type VisualStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activeTheme?: boolean
    speed?: boolean
    intensity?: boolean
    colorScheme?: boolean
    effectIds?: boolean
    activeUsers?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["visualState"]>

  export type VisualStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activeTheme?: boolean
    speed?: boolean
    intensity?: boolean
    colorScheme?: boolean
    effectIds?: boolean
    activeUsers?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["visualState"]>

  export type VisualStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activeTheme?: boolean
    speed?: boolean
    intensity?: boolean
    colorScheme?: boolean
    effectIds?: boolean
    activeUsers?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["visualState"]>

  export type VisualStateSelectScalar = {
    id?: boolean
    activeTheme?: boolean
    speed?: boolean
    intensity?: boolean
    colorScheme?: boolean
    effectIds?: boolean
    activeUsers?: boolean
    lastUpdated?: boolean
  }

  export type VisualStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activeTheme" | "speed" | "intensity" | "colorScheme" | "effectIds" | "activeUsers" | "lastUpdated", ExtArgs["result"]["visualState"]>

  export type $VisualStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisualState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activeTheme: string
      speed: number
      intensity: number
      colorScheme: string
      effectIds: Prisma.JsonValue
      activeUsers: number
      lastUpdated: Date
    }, ExtArgs["result"]["visualState"]>
    composites: {}
  }

  type VisualStateGetPayload<S extends boolean | null | undefined | VisualStateDefaultArgs> = $Result.GetResult<Prisma.$VisualStatePayload, S>

  type VisualStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisualStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisualStateCountAggregateInputType | true
    }

  export interface VisualStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisualState'], meta: { name: 'VisualState' } }
    /**
     * Find zero or one VisualState that matches the filter.
     * @param {VisualStateFindUniqueArgs} args - Arguments to find a VisualState
     * @example
     * // Get one VisualState
     * const visualState = await prisma.visualState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisualStateFindUniqueArgs>(args: SelectSubset<T, VisualStateFindUniqueArgs<ExtArgs>>): Prisma__VisualStateClient<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisualState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisualStateFindUniqueOrThrowArgs} args - Arguments to find a VisualState
     * @example
     * // Get one VisualState
     * const visualState = await prisma.visualState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisualStateFindUniqueOrThrowArgs>(args: SelectSubset<T, VisualStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisualStateClient<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisualState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualStateFindFirstArgs} args - Arguments to find a VisualState
     * @example
     * // Get one VisualState
     * const visualState = await prisma.visualState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisualStateFindFirstArgs>(args?: SelectSubset<T, VisualStateFindFirstArgs<ExtArgs>>): Prisma__VisualStateClient<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisualState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualStateFindFirstOrThrowArgs} args - Arguments to find a VisualState
     * @example
     * // Get one VisualState
     * const visualState = await prisma.visualState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisualStateFindFirstOrThrowArgs>(args?: SelectSubset<T, VisualStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisualStateClient<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisualStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisualStates
     * const visualStates = await prisma.visualState.findMany()
     * 
     * // Get first 10 VisualStates
     * const visualStates = await prisma.visualState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visualStateWithIdOnly = await prisma.visualState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisualStateFindManyArgs>(args?: SelectSubset<T, VisualStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisualState.
     * @param {VisualStateCreateArgs} args - Arguments to create a VisualState.
     * @example
     * // Create one VisualState
     * const VisualState = await prisma.visualState.create({
     *   data: {
     *     // ... data to create a VisualState
     *   }
     * })
     * 
     */
    create<T extends VisualStateCreateArgs>(args: SelectSubset<T, VisualStateCreateArgs<ExtArgs>>): Prisma__VisualStateClient<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisualStates.
     * @param {VisualStateCreateManyArgs} args - Arguments to create many VisualStates.
     * @example
     * // Create many VisualStates
     * const visualState = await prisma.visualState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisualStateCreateManyArgs>(args?: SelectSubset<T, VisualStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisualStates and returns the data saved in the database.
     * @param {VisualStateCreateManyAndReturnArgs} args - Arguments to create many VisualStates.
     * @example
     * // Create many VisualStates
     * const visualState = await prisma.visualState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisualStates and only return the `id`
     * const visualStateWithIdOnly = await prisma.visualState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisualStateCreateManyAndReturnArgs>(args?: SelectSubset<T, VisualStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisualState.
     * @param {VisualStateDeleteArgs} args - Arguments to delete one VisualState.
     * @example
     * // Delete one VisualState
     * const VisualState = await prisma.visualState.delete({
     *   where: {
     *     // ... filter to delete one VisualState
     *   }
     * })
     * 
     */
    delete<T extends VisualStateDeleteArgs>(args: SelectSubset<T, VisualStateDeleteArgs<ExtArgs>>): Prisma__VisualStateClient<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisualState.
     * @param {VisualStateUpdateArgs} args - Arguments to update one VisualState.
     * @example
     * // Update one VisualState
     * const visualState = await prisma.visualState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisualStateUpdateArgs>(args: SelectSubset<T, VisualStateUpdateArgs<ExtArgs>>): Prisma__VisualStateClient<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisualStates.
     * @param {VisualStateDeleteManyArgs} args - Arguments to filter VisualStates to delete.
     * @example
     * // Delete a few VisualStates
     * const { count } = await prisma.visualState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisualStateDeleteManyArgs>(args?: SelectSubset<T, VisualStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisualStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisualStates
     * const visualState = await prisma.visualState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisualStateUpdateManyArgs>(args: SelectSubset<T, VisualStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisualStates and returns the data updated in the database.
     * @param {VisualStateUpdateManyAndReturnArgs} args - Arguments to update many VisualStates.
     * @example
     * // Update many VisualStates
     * const visualState = await prisma.visualState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisualStates and only return the `id`
     * const visualStateWithIdOnly = await prisma.visualState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisualStateUpdateManyAndReturnArgs>(args: SelectSubset<T, VisualStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisualState.
     * @param {VisualStateUpsertArgs} args - Arguments to update or create a VisualState.
     * @example
     * // Update or create a VisualState
     * const visualState = await prisma.visualState.upsert({
     *   create: {
     *     // ... data to create a VisualState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisualState we want to update
     *   }
     * })
     */
    upsert<T extends VisualStateUpsertArgs>(args: SelectSubset<T, VisualStateUpsertArgs<ExtArgs>>): Prisma__VisualStateClient<$Result.GetResult<Prisma.$VisualStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisualStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualStateCountArgs} args - Arguments to filter VisualStates to count.
     * @example
     * // Count the number of VisualStates
     * const count = await prisma.visualState.count({
     *   where: {
     *     // ... the filter for the VisualStates we want to count
     *   }
     * })
    **/
    count<T extends VisualStateCountArgs>(
      args?: Subset<T, VisualStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisualStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisualState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisualStateAggregateArgs>(args: Subset<T, VisualStateAggregateArgs>): Prisma.PrismaPromise<GetVisualStateAggregateType<T>>

    /**
     * Group by VisualState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisualStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisualStateGroupByArgs['orderBy'] }
        : { orderBy?: VisualStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisualStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisualStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisualState model
   */
  readonly fields: VisualStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisualState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisualStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VisualState model
   */
  interface VisualStateFieldRefs {
    readonly id: FieldRef<"VisualState", 'Int'>
    readonly activeTheme: FieldRef<"VisualState", 'String'>
    readonly speed: FieldRef<"VisualState", 'Float'>
    readonly intensity: FieldRef<"VisualState", 'Float'>
    readonly colorScheme: FieldRef<"VisualState", 'String'>
    readonly effectIds: FieldRef<"VisualState", 'Json'>
    readonly activeUsers: FieldRef<"VisualState", 'Int'>
    readonly lastUpdated: FieldRef<"VisualState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VisualState findUnique
   */
  export type VisualStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * Filter, which VisualState to fetch.
     */
    where: VisualStateWhereUniqueInput
  }

  /**
   * VisualState findUniqueOrThrow
   */
  export type VisualStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * Filter, which VisualState to fetch.
     */
    where: VisualStateWhereUniqueInput
  }

  /**
   * VisualState findFirst
   */
  export type VisualStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * Filter, which VisualState to fetch.
     */
    where?: VisualStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualStates to fetch.
     */
    orderBy?: VisualStateOrderByWithRelationInput | VisualStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisualStates.
     */
    cursor?: VisualStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisualStates.
     */
    distinct?: VisualStateScalarFieldEnum | VisualStateScalarFieldEnum[]
  }

  /**
   * VisualState findFirstOrThrow
   */
  export type VisualStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * Filter, which VisualState to fetch.
     */
    where?: VisualStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualStates to fetch.
     */
    orderBy?: VisualStateOrderByWithRelationInput | VisualStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisualStates.
     */
    cursor?: VisualStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisualStates.
     */
    distinct?: VisualStateScalarFieldEnum | VisualStateScalarFieldEnum[]
  }

  /**
   * VisualState findMany
   */
  export type VisualStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * Filter, which VisualStates to fetch.
     */
    where?: VisualStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualStates to fetch.
     */
    orderBy?: VisualStateOrderByWithRelationInput | VisualStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisualStates.
     */
    cursor?: VisualStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualStates.
     */
    skip?: number
    distinct?: VisualStateScalarFieldEnum | VisualStateScalarFieldEnum[]
  }

  /**
   * VisualState create
   */
  export type VisualStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * The data needed to create a VisualState.
     */
    data: XOR<VisualStateCreateInput, VisualStateUncheckedCreateInput>
  }

  /**
   * VisualState createMany
   */
  export type VisualStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisualStates.
     */
    data: VisualStateCreateManyInput | VisualStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisualState createManyAndReturn
   */
  export type VisualStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * The data used to create many VisualStates.
     */
    data: VisualStateCreateManyInput | VisualStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisualState update
   */
  export type VisualStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * The data needed to update a VisualState.
     */
    data: XOR<VisualStateUpdateInput, VisualStateUncheckedUpdateInput>
    /**
     * Choose, which VisualState to update.
     */
    where: VisualStateWhereUniqueInput
  }

  /**
   * VisualState updateMany
   */
  export type VisualStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisualStates.
     */
    data: XOR<VisualStateUpdateManyMutationInput, VisualStateUncheckedUpdateManyInput>
    /**
     * Filter which VisualStates to update
     */
    where?: VisualStateWhereInput
    /**
     * Limit how many VisualStates to update.
     */
    limit?: number
  }

  /**
   * VisualState updateManyAndReturn
   */
  export type VisualStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * The data used to update VisualStates.
     */
    data: XOR<VisualStateUpdateManyMutationInput, VisualStateUncheckedUpdateManyInput>
    /**
     * Filter which VisualStates to update
     */
    where?: VisualStateWhereInput
    /**
     * Limit how many VisualStates to update.
     */
    limit?: number
  }

  /**
   * VisualState upsert
   */
  export type VisualStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * The filter to search for the VisualState to update in case it exists.
     */
    where: VisualStateWhereUniqueInput
    /**
     * In case the VisualState found by the `where` argument doesn't exist, create a new VisualState with this data.
     */
    create: XOR<VisualStateCreateInput, VisualStateUncheckedCreateInput>
    /**
     * In case the VisualState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisualStateUpdateInput, VisualStateUncheckedUpdateInput>
  }

  /**
   * VisualState delete
   */
  export type VisualStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
    /**
     * Filter which VisualState to delete.
     */
    where: VisualStateWhereUniqueInput
  }

  /**
   * VisualState deleteMany
   */
  export type VisualStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisualStates to delete
     */
    where?: VisualStateWhereInput
    /**
     * Limit how many VisualStates to delete.
     */
    limit?: number
  }

  /**
   * VisualState without action
   */
  export type VisualStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualState
     */
    select?: VisualStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualState
     */
    omit?: VisualStateOmit<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteAvgAggregateOutputType = {
    id: number | null
  }

  export type VoteSumAggregateOutputType = {
    id: number | null
  }

  export type VoteMinAggregateOutputType = {
    id: number | null
    userId: string | null
    theme: string | null
    createdAt: Date | null
  }

  export type VoteMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    theme: string | null
    createdAt: Date | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    userId: number
    theme: number
    createdAt: number
    _all: number
  }


  export type VoteAvgAggregateInputType = {
    id?: true
  }

  export type VoteSumAggregateInputType = {
    id?: true
  }

  export type VoteMinAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    createdAt?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    createdAt?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    createdAt?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _avg?: VoteAvgAggregateInputType
    _sum?: VoteSumAggregateInputType
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: number
    userId: string
    theme: string
    createdAt: Date
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    userId?: boolean
    theme?: boolean
    createdAt?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "theme" | "createdAt", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      theme: string
      createdAt: Date
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'Int'>
    readonly userId: FieldRef<"Vote", 'String'>
    readonly theme: FieldRef<"Vote", 'String'>
    readonly createdAt: FieldRef<"Vote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model Interaction
   */

  export type AggregateInteraction = {
    _count: InteractionCountAggregateOutputType | null
    _avg: InteractionAvgAggregateOutputType | null
    _sum: InteractionSumAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  export type InteractionAvgAggregateOutputType = {
    id: number | null
  }

  export type InteractionSumAggregateOutputType = {
    id: number | null
  }

  export type InteractionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    actionType: string | null
    createdAt: Date | null
  }

  export type InteractionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    actionType: string | null
    createdAt: Date | null
  }

  export type InteractionCountAggregateOutputType = {
    id: number
    userId: number
    actionType: number
    details: number
    createdAt: number
    _all: number
  }


  export type InteractionAvgAggregateInputType = {
    id?: true
  }

  export type InteractionSumAggregateInputType = {
    id?: true
  }

  export type InteractionMinAggregateInputType = {
    id?: true
    userId?: true
    actionType?: true
    createdAt?: true
  }

  export type InteractionMaxAggregateInputType = {
    id?: true
    userId?: true
    actionType?: true
    createdAt?: true
  }

  export type InteractionCountAggregateInputType = {
    id?: true
    userId?: true
    actionType?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type InteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interaction to aggregate.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interactions
    **/
    _count?: true | InteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InteractionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InteractionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractionMaxAggregateInputType
  }

  export type GetInteractionAggregateType<T extends InteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteraction[P]>
      : GetScalarType<T[P], AggregateInteraction[P]>
  }




  export type InteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithAggregationInput | InteractionOrderByWithAggregationInput[]
    by: InteractionScalarFieldEnum[] | InteractionScalarFieldEnum
    having?: InteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractionCountAggregateInputType | true
    _avg?: InteractionAvgAggregateInputType
    _sum?: InteractionSumAggregateInputType
    _min?: InteractionMinAggregateInputType
    _max?: InteractionMaxAggregateInputType
  }

  export type InteractionGroupByOutputType = {
    id: number
    userId: string
    actionType: string
    details: JsonValue
    createdAt: Date
    _count: InteractionCountAggregateOutputType | null
    _avg: InteractionAvgAggregateOutputType | null
    _sum: InteractionSumAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  type GetInteractionGroupByPayload<T extends InteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionGroupByOutputType[P]>
        }
      >
    >


  export type InteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    actionType?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    actionType?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    actionType?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectScalar = {
    id?: boolean
    userId?: boolean
    actionType?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type InteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "actionType" | "details" | "createdAt", ExtArgs["result"]["interaction"]>
  export type InteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      actionType: string
      details: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["interaction"]>
    composites: {}
  }

  type InteractionGetPayload<S extends boolean | null | undefined | InteractionDefaultArgs> = $Result.GetResult<Prisma.$InteractionPayload, S>

  type InteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractionCountAggregateInputType | true
    }

  export interface InteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interaction'], meta: { name: 'Interaction' } }
    /**
     * Find zero or one Interaction that matches the filter.
     * @param {InteractionFindUniqueArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractionFindUniqueArgs>(args: SelectSubset<T, InteractionFindUniqueArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractionFindUniqueOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, InteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractionFindFirstArgs>(args?: SelectSubset<T, InteractionFindFirstArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, InteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interaction.findMany()
     * 
     * // Get first 10 Interactions
     * const interactions = await prisma.interaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactionWithIdOnly = await prisma.interaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteractionFindManyArgs>(args?: SelectSubset<T, InteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interaction.
     * @param {InteractionCreateArgs} args - Arguments to create a Interaction.
     * @example
     * // Create one Interaction
     * const Interaction = await prisma.interaction.create({
     *   data: {
     *     // ... data to create a Interaction
     *   }
     * })
     * 
     */
    create<T extends InteractionCreateArgs>(args: SelectSubset<T, InteractionCreateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interactions.
     * @param {InteractionCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteractionCreateManyArgs>(args?: SelectSubset<T, InteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interactions and returns the data saved in the database.
     * @param {InteractionCreateManyAndReturnArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, InteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interaction.
     * @param {InteractionDeleteArgs} args - Arguments to delete one Interaction.
     * @example
     * // Delete one Interaction
     * const Interaction = await prisma.interaction.delete({
     *   where: {
     *     // ... filter to delete one Interaction
     *   }
     * })
     * 
     */
    delete<T extends InteractionDeleteArgs>(args: SelectSubset<T, InteractionDeleteArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interaction.
     * @param {InteractionUpdateArgs} args - Arguments to update one Interaction.
     * @example
     * // Update one Interaction
     * const interaction = await prisma.interaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteractionUpdateArgs>(args: SelectSubset<T, InteractionUpdateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interactions.
     * @param {InteractionDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteractionDeleteManyArgs>(args?: SelectSubset<T, InteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteractionUpdateManyArgs>(args: SelectSubset<T, InteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions and returns the data updated in the database.
     * @param {InteractionUpdateManyAndReturnArgs} args - Arguments to update many Interactions.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, InteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interaction.
     * @param {InteractionUpsertArgs} args - Arguments to update or create a Interaction.
     * @example
     * // Update or create a Interaction
     * const interaction = await prisma.interaction.upsert({
     *   create: {
     *     // ... data to create a Interaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interaction we want to update
     *   }
     * })
     */
    upsert<T extends InteractionUpsertArgs>(args: SelectSubset<T, InteractionUpsertArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interaction.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
    **/
    count<T extends InteractionCountArgs>(
      args?: Subset<T, InteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InteractionAggregateArgs>(args: Subset<T, InteractionAggregateArgs>): Prisma.PrismaPromise<GetInteractionAggregateType<T>>

    /**
     * Group by Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractionGroupByArgs['orderBy'] }
        : { orderBy?: InteractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interaction model
   */
  readonly fields: InteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interaction model
   */
  interface InteractionFieldRefs {
    readonly id: FieldRef<"Interaction", 'Int'>
    readonly userId: FieldRef<"Interaction", 'String'>
    readonly actionType: FieldRef<"Interaction", 'String'>
    readonly details: FieldRef<"Interaction", 'Json'>
    readonly createdAt: FieldRef<"Interaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interaction findUnique
   */
  export type InteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findUniqueOrThrow
   */
  export type InteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findFirst
   */
  export type InteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findFirstOrThrow
   */
  export type InteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findMany
   */
  export type InteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction create
   */
  export type InteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Interaction.
     */
    data: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
  }

  /**
   * Interaction createMany
   */
  export type InteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interaction createManyAndReturn
   */
  export type InteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction update
   */
  export type InteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Interaction.
     */
    data: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
    /**
     * Choose, which Interaction to update.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction updateMany
   */
  export type InteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
  }

  /**
   * Interaction updateManyAndReturn
   */
  export type InteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction upsert
   */
  export type InteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Interaction to update in case it exists.
     */
    where: InteractionWhereUniqueInput
    /**
     * In case the Interaction found by the `where` argument doesn't exist, create a new Interaction with this data.
     */
    create: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
    /**
     * In case the Interaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
  }

  /**
   * Interaction delete
   */
  export type InteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter which Interaction to delete.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction deleteMany
   */
  export type InteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interactions to delete
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to delete.
     */
    limit?: number
  }

  /**
   * Interaction without action
   */
  export type InteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
  }


  /**
   * Model DJ
   */

  export type AggregateDJ = {
    _count: DJCountAggregateOutputType | null
    _avg: DJAvgAggregateOutputType | null
    _sum: DJSumAggregateOutputType | null
    _min: DJMinAggregateOutputType | null
    _max: DJMaxAggregateOutputType | null
  }

  export type DJAvgAggregateOutputType = {
    id: number | null
  }

  export type DJSumAggregateOutputType = {
    id: number | null
  }

  export type DJMinAggregateOutputType = {
    id: number | null
    name: string | null
    setStart: Date | null
    setEnd: Date | null
    visualPreset: string | null
  }

  export type DJMaxAggregateOutputType = {
    id: number | null
    name: string | null
    setStart: Date | null
    setEnd: Date | null
    visualPreset: string | null
  }

  export type DJCountAggregateOutputType = {
    id: number
    name: number
    setStart: number
    setEnd: number
    visualPreset: number
    _all: number
  }


  export type DJAvgAggregateInputType = {
    id?: true
  }

  export type DJSumAggregateInputType = {
    id?: true
  }

  export type DJMinAggregateInputType = {
    id?: true
    name?: true
    setStart?: true
    setEnd?: true
    visualPreset?: true
  }

  export type DJMaxAggregateInputType = {
    id?: true
    name?: true
    setStart?: true
    setEnd?: true
    visualPreset?: true
  }

  export type DJCountAggregateInputType = {
    id?: true
    name?: true
    setStart?: true
    setEnd?: true
    visualPreset?: true
    _all?: true
  }

  export type DJAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DJ to aggregate.
     */
    where?: DJWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DJS to fetch.
     */
    orderBy?: DJOrderByWithRelationInput | DJOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DJWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DJS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DJS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DJS
    **/
    _count?: true | DJCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DJAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DJSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DJMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DJMaxAggregateInputType
  }

  export type GetDJAggregateType<T extends DJAggregateArgs> = {
        [P in keyof T & keyof AggregateDJ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDJ[P]>
      : GetScalarType<T[P], AggregateDJ[P]>
  }




  export type DJGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DJWhereInput
    orderBy?: DJOrderByWithAggregationInput | DJOrderByWithAggregationInput[]
    by: DJScalarFieldEnum[] | DJScalarFieldEnum
    having?: DJScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DJCountAggregateInputType | true
    _avg?: DJAvgAggregateInputType
    _sum?: DJSumAggregateInputType
    _min?: DJMinAggregateInputType
    _max?: DJMaxAggregateInputType
  }

  export type DJGroupByOutputType = {
    id: number
    name: string
    setStart: Date
    setEnd: Date
    visualPreset: string
    _count: DJCountAggregateOutputType | null
    _avg: DJAvgAggregateOutputType | null
    _sum: DJSumAggregateOutputType | null
    _min: DJMinAggregateOutputType | null
    _max: DJMaxAggregateOutputType | null
  }

  type GetDJGroupByPayload<T extends DJGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DJGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DJGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DJGroupByOutputType[P]>
            : GetScalarType<T[P], DJGroupByOutputType[P]>
        }
      >
    >


  export type DJSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    setStart?: boolean
    setEnd?: boolean
    visualPreset?: boolean
  }, ExtArgs["result"]["dJ"]>

  export type DJSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    setStart?: boolean
    setEnd?: boolean
    visualPreset?: boolean
  }, ExtArgs["result"]["dJ"]>

  export type DJSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    setStart?: boolean
    setEnd?: boolean
    visualPreset?: boolean
  }, ExtArgs["result"]["dJ"]>

  export type DJSelectScalar = {
    id?: boolean
    name?: boolean
    setStart?: boolean
    setEnd?: boolean
    visualPreset?: boolean
  }

  export type DJOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "setStart" | "setEnd" | "visualPreset", ExtArgs["result"]["dJ"]>

  export type $DJPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DJ"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      setStart: Date
      setEnd: Date
      visualPreset: string
    }, ExtArgs["result"]["dJ"]>
    composites: {}
  }

  type DJGetPayload<S extends boolean | null | undefined | DJDefaultArgs> = $Result.GetResult<Prisma.$DJPayload, S>

  type DJCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DJFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DJCountAggregateInputType | true
    }

  export interface DJDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DJ'], meta: { name: 'DJ' } }
    /**
     * Find zero or one DJ that matches the filter.
     * @param {DJFindUniqueArgs} args - Arguments to find a DJ
     * @example
     * // Get one DJ
     * const dJ = await prisma.dJ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DJFindUniqueArgs>(args: SelectSubset<T, DJFindUniqueArgs<ExtArgs>>): Prisma__DJClient<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DJ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DJFindUniqueOrThrowArgs} args - Arguments to find a DJ
     * @example
     * // Get one DJ
     * const dJ = await prisma.dJ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DJFindUniqueOrThrowArgs>(args: SelectSubset<T, DJFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DJClient<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DJ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DJFindFirstArgs} args - Arguments to find a DJ
     * @example
     * // Get one DJ
     * const dJ = await prisma.dJ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DJFindFirstArgs>(args?: SelectSubset<T, DJFindFirstArgs<ExtArgs>>): Prisma__DJClient<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DJ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DJFindFirstOrThrowArgs} args - Arguments to find a DJ
     * @example
     * // Get one DJ
     * const dJ = await prisma.dJ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DJFindFirstOrThrowArgs>(args?: SelectSubset<T, DJFindFirstOrThrowArgs<ExtArgs>>): Prisma__DJClient<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DJS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DJFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DJS
     * const dJS = await prisma.dJ.findMany()
     * 
     * // Get first 10 DJS
     * const dJS = await prisma.dJ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dJWithIdOnly = await prisma.dJ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DJFindManyArgs>(args?: SelectSubset<T, DJFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DJ.
     * @param {DJCreateArgs} args - Arguments to create a DJ.
     * @example
     * // Create one DJ
     * const DJ = await prisma.dJ.create({
     *   data: {
     *     // ... data to create a DJ
     *   }
     * })
     * 
     */
    create<T extends DJCreateArgs>(args: SelectSubset<T, DJCreateArgs<ExtArgs>>): Prisma__DJClient<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DJS.
     * @param {DJCreateManyArgs} args - Arguments to create many DJS.
     * @example
     * // Create many DJS
     * const dJ = await prisma.dJ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DJCreateManyArgs>(args?: SelectSubset<T, DJCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DJS and returns the data saved in the database.
     * @param {DJCreateManyAndReturnArgs} args - Arguments to create many DJS.
     * @example
     * // Create many DJS
     * const dJ = await prisma.dJ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DJS and only return the `id`
     * const dJWithIdOnly = await prisma.dJ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DJCreateManyAndReturnArgs>(args?: SelectSubset<T, DJCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DJ.
     * @param {DJDeleteArgs} args - Arguments to delete one DJ.
     * @example
     * // Delete one DJ
     * const DJ = await prisma.dJ.delete({
     *   where: {
     *     // ... filter to delete one DJ
     *   }
     * })
     * 
     */
    delete<T extends DJDeleteArgs>(args: SelectSubset<T, DJDeleteArgs<ExtArgs>>): Prisma__DJClient<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DJ.
     * @param {DJUpdateArgs} args - Arguments to update one DJ.
     * @example
     * // Update one DJ
     * const dJ = await prisma.dJ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DJUpdateArgs>(args: SelectSubset<T, DJUpdateArgs<ExtArgs>>): Prisma__DJClient<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DJS.
     * @param {DJDeleteManyArgs} args - Arguments to filter DJS to delete.
     * @example
     * // Delete a few DJS
     * const { count } = await prisma.dJ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DJDeleteManyArgs>(args?: SelectSubset<T, DJDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DJS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DJUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DJS
     * const dJ = await prisma.dJ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DJUpdateManyArgs>(args: SelectSubset<T, DJUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DJS and returns the data updated in the database.
     * @param {DJUpdateManyAndReturnArgs} args - Arguments to update many DJS.
     * @example
     * // Update many DJS
     * const dJ = await prisma.dJ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DJS and only return the `id`
     * const dJWithIdOnly = await prisma.dJ.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DJUpdateManyAndReturnArgs>(args: SelectSubset<T, DJUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DJ.
     * @param {DJUpsertArgs} args - Arguments to update or create a DJ.
     * @example
     * // Update or create a DJ
     * const dJ = await prisma.dJ.upsert({
     *   create: {
     *     // ... data to create a DJ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DJ we want to update
     *   }
     * })
     */
    upsert<T extends DJUpsertArgs>(args: SelectSubset<T, DJUpsertArgs<ExtArgs>>): Prisma__DJClient<$Result.GetResult<Prisma.$DJPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DJS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DJCountArgs} args - Arguments to filter DJS to count.
     * @example
     * // Count the number of DJS
     * const count = await prisma.dJ.count({
     *   where: {
     *     // ... the filter for the DJS we want to count
     *   }
     * })
    **/
    count<T extends DJCountArgs>(
      args?: Subset<T, DJCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DJCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DJ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DJAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DJAggregateArgs>(args: Subset<T, DJAggregateArgs>): Prisma.PrismaPromise<GetDJAggregateType<T>>

    /**
     * Group by DJ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DJGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DJGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DJGroupByArgs['orderBy'] }
        : { orderBy?: DJGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DJGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDJGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DJ model
   */
  readonly fields: DJFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DJ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DJClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DJ model
   */
  interface DJFieldRefs {
    readonly id: FieldRef<"DJ", 'Int'>
    readonly name: FieldRef<"DJ", 'String'>
    readonly setStart: FieldRef<"DJ", 'DateTime'>
    readonly setEnd: FieldRef<"DJ", 'DateTime'>
    readonly visualPreset: FieldRef<"DJ", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DJ findUnique
   */
  export type DJFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * Filter, which DJ to fetch.
     */
    where: DJWhereUniqueInput
  }

  /**
   * DJ findUniqueOrThrow
   */
  export type DJFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * Filter, which DJ to fetch.
     */
    where: DJWhereUniqueInput
  }

  /**
   * DJ findFirst
   */
  export type DJFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * Filter, which DJ to fetch.
     */
    where?: DJWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DJS to fetch.
     */
    orderBy?: DJOrderByWithRelationInput | DJOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DJS.
     */
    cursor?: DJWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DJS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DJS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DJS.
     */
    distinct?: DJScalarFieldEnum | DJScalarFieldEnum[]
  }

  /**
   * DJ findFirstOrThrow
   */
  export type DJFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * Filter, which DJ to fetch.
     */
    where?: DJWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DJS to fetch.
     */
    orderBy?: DJOrderByWithRelationInput | DJOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DJS.
     */
    cursor?: DJWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DJS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DJS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DJS.
     */
    distinct?: DJScalarFieldEnum | DJScalarFieldEnum[]
  }

  /**
   * DJ findMany
   */
  export type DJFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * Filter, which DJS to fetch.
     */
    where?: DJWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DJS to fetch.
     */
    orderBy?: DJOrderByWithRelationInput | DJOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DJS.
     */
    cursor?: DJWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DJS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DJS.
     */
    skip?: number
    distinct?: DJScalarFieldEnum | DJScalarFieldEnum[]
  }

  /**
   * DJ create
   */
  export type DJCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * The data needed to create a DJ.
     */
    data: XOR<DJCreateInput, DJUncheckedCreateInput>
  }

  /**
   * DJ createMany
   */
  export type DJCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DJS.
     */
    data: DJCreateManyInput | DJCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DJ createManyAndReturn
   */
  export type DJCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * The data used to create many DJS.
     */
    data: DJCreateManyInput | DJCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DJ update
   */
  export type DJUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * The data needed to update a DJ.
     */
    data: XOR<DJUpdateInput, DJUncheckedUpdateInput>
    /**
     * Choose, which DJ to update.
     */
    where: DJWhereUniqueInput
  }

  /**
   * DJ updateMany
   */
  export type DJUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DJS.
     */
    data: XOR<DJUpdateManyMutationInput, DJUncheckedUpdateManyInput>
    /**
     * Filter which DJS to update
     */
    where?: DJWhereInput
    /**
     * Limit how many DJS to update.
     */
    limit?: number
  }

  /**
   * DJ updateManyAndReturn
   */
  export type DJUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * The data used to update DJS.
     */
    data: XOR<DJUpdateManyMutationInput, DJUncheckedUpdateManyInput>
    /**
     * Filter which DJS to update
     */
    where?: DJWhereInput
    /**
     * Limit how many DJS to update.
     */
    limit?: number
  }

  /**
   * DJ upsert
   */
  export type DJUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * The filter to search for the DJ to update in case it exists.
     */
    where: DJWhereUniqueInput
    /**
     * In case the DJ found by the `where` argument doesn't exist, create a new DJ with this data.
     */
    create: XOR<DJCreateInput, DJUncheckedCreateInput>
    /**
     * In case the DJ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DJUpdateInput, DJUncheckedUpdateInput>
  }

  /**
   * DJ delete
   */
  export type DJDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
    /**
     * Filter which DJ to delete.
     */
    where: DJWhereUniqueInput
  }

  /**
   * DJ deleteMany
   */
  export type DJDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DJS to delete
     */
    where?: DJWhereInput
    /**
     * Limit how many DJS to delete.
     */
    limit?: number
  }

  /**
   * DJ without action
   */
  export type DJDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DJ
     */
    select?: DJSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DJ
     */
    omit?: DJOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    joinedAt: 'joinedAt',
    lastActive: 'lastActive',
    voteCount: 'voteCount'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VisualStateScalarFieldEnum: {
    id: 'id',
    activeTheme: 'activeTheme',
    speed: 'speed',
    intensity: 'intensity',
    colorScheme: 'colorScheme',
    effectIds: 'effectIds',
    activeUsers: 'activeUsers',
    lastUpdated: 'lastUpdated'
  };

  export type VisualStateScalarFieldEnum = (typeof VisualStateScalarFieldEnum)[keyof typeof VisualStateScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    theme: 'theme',
    createdAt: 'createdAt'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const InteractionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    actionType: 'actionType',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type InteractionScalarFieldEnum = (typeof InteractionScalarFieldEnum)[keyof typeof InteractionScalarFieldEnum]


  export const DJScalarFieldEnum: {
    id: 'id',
    name: 'name',
    setStart: 'setStart',
    setEnd: 'setEnd',
    visualPreset: 'visualPreset'
  };

  export type DJScalarFieldEnum = (typeof DJScalarFieldEnum)[keyof typeof DJScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    joinedAt?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    voteCount?: IntFilter<"User"> | number
    votes?: VoteListRelationFilter
    interactions?: InteractionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
    voteCount?: SortOrder
    votes?: VoteOrderByRelationAggregateInput
    interactions?: InteractionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringNullableFilter<"User"> | string | null
    joinedAt?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    voteCount?: IntFilter<"User"> | number
    votes?: VoteListRelationFilter
    interactions?: InteractionListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
    voteCount?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastActive?: DateTimeWithAggregatesFilter<"User"> | Date | string
    voteCount?: IntWithAggregatesFilter<"User"> | number
  }

  export type VisualStateWhereInput = {
    AND?: VisualStateWhereInput | VisualStateWhereInput[]
    OR?: VisualStateWhereInput[]
    NOT?: VisualStateWhereInput | VisualStateWhereInput[]
    id?: IntFilter<"VisualState"> | number
    activeTheme?: StringFilter<"VisualState"> | string
    speed?: FloatFilter<"VisualState"> | number
    intensity?: FloatFilter<"VisualState"> | number
    colorScheme?: StringFilter<"VisualState"> | string
    effectIds?: JsonFilter<"VisualState">
    activeUsers?: IntFilter<"VisualState"> | number
    lastUpdated?: DateTimeFilter<"VisualState"> | Date | string
  }

  export type VisualStateOrderByWithRelationInput = {
    id?: SortOrder
    activeTheme?: SortOrder
    speed?: SortOrder
    intensity?: SortOrder
    colorScheme?: SortOrder
    effectIds?: SortOrder
    activeUsers?: SortOrder
    lastUpdated?: SortOrder
  }

  export type VisualStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisualStateWhereInput | VisualStateWhereInput[]
    OR?: VisualStateWhereInput[]
    NOT?: VisualStateWhereInput | VisualStateWhereInput[]
    activeTheme?: StringFilter<"VisualState"> | string
    speed?: FloatFilter<"VisualState"> | number
    intensity?: FloatFilter<"VisualState"> | number
    colorScheme?: StringFilter<"VisualState"> | string
    effectIds?: JsonFilter<"VisualState">
    activeUsers?: IntFilter<"VisualState"> | number
    lastUpdated?: DateTimeFilter<"VisualState"> | Date | string
  }, "id">

  export type VisualStateOrderByWithAggregationInput = {
    id?: SortOrder
    activeTheme?: SortOrder
    speed?: SortOrder
    intensity?: SortOrder
    colorScheme?: SortOrder
    effectIds?: SortOrder
    activeUsers?: SortOrder
    lastUpdated?: SortOrder
    _count?: VisualStateCountOrderByAggregateInput
    _avg?: VisualStateAvgOrderByAggregateInput
    _max?: VisualStateMaxOrderByAggregateInput
    _min?: VisualStateMinOrderByAggregateInput
    _sum?: VisualStateSumOrderByAggregateInput
  }

  export type VisualStateScalarWhereWithAggregatesInput = {
    AND?: VisualStateScalarWhereWithAggregatesInput | VisualStateScalarWhereWithAggregatesInput[]
    OR?: VisualStateScalarWhereWithAggregatesInput[]
    NOT?: VisualStateScalarWhereWithAggregatesInput | VisualStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisualState"> | number
    activeTheme?: StringWithAggregatesFilter<"VisualState"> | string
    speed?: FloatWithAggregatesFilter<"VisualState"> | number
    intensity?: FloatWithAggregatesFilter<"VisualState"> | number
    colorScheme?: StringWithAggregatesFilter<"VisualState"> | string
    effectIds?: JsonWithAggregatesFilter<"VisualState">
    activeUsers?: IntWithAggregatesFilter<"VisualState"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"VisualState"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: IntFilter<"Vote"> | number
    userId?: StringFilter<"Vote"> | string
    theme?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    userId?: StringFilter<"Vote"> | string
    theme?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _avg?: VoteAvgOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
    _sum?: VoteSumOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vote"> | number
    userId?: StringWithAggregatesFilter<"Vote"> | string
    theme?: StringWithAggregatesFilter<"Vote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
  }

  export type InteractionWhereInput = {
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    id?: IntFilter<"Interaction"> | number
    userId?: StringFilter<"Interaction"> | string
    actionType?: StringFilter<"Interaction"> | string
    details?: JsonFilter<"Interaction">
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InteractionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    userId?: StringFilter<"Interaction"> | string
    actionType?: StringFilter<"Interaction"> | string
    details?: JsonFilter<"Interaction">
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InteractionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    _count?: InteractionCountOrderByAggregateInput
    _avg?: InteractionAvgOrderByAggregateInput
    _max?: InteractionMaxOrderByAggregateInput
    _min?: InteractionMinOrderByAggregateInput
    _sum?: InteractionSumOrderByAggregateInput
  }

  export type InteractionScalarWhereWithAggregatesInput = {
    AND?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    OR?: InteractionScalarWhereWithAggregatesInput[]
    NOT?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interaction"> | number
    userId?: StringWithAggregatesFilter<"Interaction"> | string
    actionType?: StringWithAggregatesFilter<"Interaction"> | string
    details?: JsonWithAggregatesFilter<"Interaction">
    createdAt?: DateTimeWithAggregatesFilter<"Interaction"> | Date | string
  }

  export type DJWhereInput = {
    AND?: DJWhereInput | DJWhereInput[]
    OR?: DJWhereInput[]
    NOT?: DJWhereInput | DJWhereInput[]
    id?: IntFilter<"DJ"> | number
    name?: StringFilter<"DJ"> | string
    setStart?: DateTimeFilter<"DJ"> | Date | string
    setEnd?: DateTimeFilter<"DJ"> | Date | string
    visualPreset?: StringFilter<"DJ"> | string
  }

  export type DJOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    setStart?: SortOrder
    setEnd?: SortOrder
    visualPreset?: SortOrder
  }

  export type DJWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DJWhereInput | DJWhereInput[]
    OR?: DJWhereInput[]
    NOT?: DJWhereInput | DJWhereInput[]
    name?: StringFilter<"DJ"> | string
    setStart?: DateTimeFilter<"DJ"> | Date | string
    setEnd?: DateTimeFilter<"DJ"> | Date | string
    visualPreset?: StringFilter<"DJ"> | string
  }, "id">

  export type DJOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    setStart?: SortOrder
    setEnd?: SortOrder
    visualPreset?: SortOrder
    _count?: DJCountOrderByAggregateInput
    _avg?: DJAvgOrderByAggregateInput
    _max?: DJMaxOrderByAggregateInput
    _min?: DJMinOrderByAggregateInput
    _sum?: DJSumOrderByAggregateInput
  }

  export type DJScalarWhereWithAggregatesInput = {
    AND?: DJScalarWhereWithAggregatesInput | DJScalarWhereWithAggregatesInput[]
    OR?: DJScalarWhereWithAggregatesInput[]
    NOT?: DJScalarWhereWithAggregatesInput | DJScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DJ"> | number
    name?: StringWithAggregatesFilter<"DJ"> | string
    setStart?: DateTimeWithAggregatesFilter<"DJ"> | Date | string
    setEnd?: DateTimeWithAggregatesFilter<"DJ"> | Date | string
    visualPreset?: StringWithAggregatesFilter<"DJ"> | string
  }

  export type UserCreateInput = {
    id?: string
    nickname?: string | null
    joinedAt?: Date | string
    lastActive?: Date | string
    voteCount?: number
    votes?: VoteCreateNestedManyWithoutUserInput
    interactions?: InteractionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nickname?: string | null
    joinedAt?: Date | string
    lastActive?: Date | string
    voteCount?: number
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    voteCount?: IntFieldUpdateOperationsInput | number
    votes?: VoteUpdateManyWithoutUserNestedInput
    interactions?: InteractionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    voteCount?: IntFieldUpdateOperationsInput | number
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nickname?: string | null
    joinedAt?: Date | string
    lastActive?: Date | string
    voteCount?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    voteCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    voteCount?: IntFieldUpdateOperationsInput | number
  }

  export type VisualStateCreateInput = {
    activeTheme: string
    speed?: number
    intensity?: number
    colorScheme?: string
    effectIds: JsonNullValueInput | InputJsonValue
    activeUsers?: number
    lastUpdated?: Date | string
  }

  export type VisualStateUncheckedCreateInput = {
    id?: number
    activeTheme: string
    speed?: number
    intensity?: number
    colorScheme?: string
    effectIds: JsonNullValueInput | InputJsonValue
    activeUsers?: number
    lastUpdated?: Date | string
  }

  export type VisualStateUpdateInput = {
    activeTheme?: StringFieldUpdateOperationsInput | string
    speed?: FloatFieldUpdateOperationsInput | number
    intensity?: FloatFieldUpdateOperationsInput | number
    colorScheme?: StringFieldUpdateOperationsInput | string
    effectIds?: JsonNullValueInput | InputJsonValue
    activeUsers?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activeTheme?: StringFieldUpdateOperationsInput | string
    speed?: FloatFieldUpdateOperationsInput | number
    intensity?: FloatFieldUpdateOperationsInput | number
    colorScheme?: StringFieldUpdateOperationsInput | string
    effectIds?: JsonNullValueInput | InputJsonValue
    activeUsers?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualStateCreateManyInput = {
    id?: number
    activeTheme: string
    speed?: number
    intensity?: number
    colorScheme?: string
    effectIds: JsonNullValueInput | InputJsonValue
    activeUsers?: number
    lastUpdated?: Date | string
  }

  export type VisualStateUpdateManyMutationInput = {
    activeTheme?: StringFieldUpdateOperationsInput | string
    speed?: FloatFieldUpdateOperationsInput | number
    intensity?: FloatFieldUpdateOperationsInput | number
    colorScheme?: StringFieldUpdateOperationsInput | string
    effectIds?: JsonNullValueInput | InputJsonValue
    activeUsers?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activeTheme?: StringFieldUpdateOperationsInput | string
    speed?: FloatFieldUpdateOperationsInput | number
    intensity?: FloatFieldUpdateOperationsInput | number
    colorScheme?: StringFieldUpdateOperationsInput | string
    effectIds?: JsonNullValueInput | InputJsonValue
    activeUsers?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    theme: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: number
    userId: string
    theme: string
    createdAt?: Date | string
  }

  export type VoteUpdateInput = {
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyInput = {
    id?: number
    userId: string
    theme: string
    createdAt?: Date | string
  }

  export type VoteUpdateManyMutationInput = {
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateInput = {
    actionType: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
  }

  export type InteractionUncheckedCreateInput = {
    id?: number
    userId: string
    actionType: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InteractionUpdateInput = {
    actionType?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type InteractionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateManyInput = {
    id?: number
    userId: string
    actionType: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InteractionUpdateManyMutationInput = {
    actionType?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DJCreateInput = {
    name: string
    setStart: Date | string
    setEnd: Date | string
    visualPreset: string
  }

  export type DJUncheckedCreateInput = {
    id?: number
    name: string
    setStart: Date | string
    setEnd: Date | string
    visualPreset: string
  }

  export type DJUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    setStart?: DateTimeFieldUpdateOperationsInput | Date | string
    setEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    visualPreset?: StringFieldUpdateOperationsInput | string
  }

  export type DJUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    setStart?: DateTimeFieldUpdateOperationsInput | Date | string
    setEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    visualPreset?: StringFieldUpdateOperationsInput | string
  }

  export type DJCreateManyInput = {
    id?: number
    name: string
    setStart: Date | string
    setEnd: Date | string
    visualPreset: string
  }

  export type DJUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    setStart?: DateTimeFieldUpdateOperationsInput | Date | string
    setEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    visualPreset?: StringFieldUpdateOperationsInput | string
  }

  export type DJUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    setStart?: DateTimeFieldUpdateOperationsInput | Date | string
    setEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    visualPreset?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type InteractionListRelationFilter = {
    every?: InteractionWhereInput
    some?: InteractionWhereInput
    none?: InteractionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
    voteCount?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    voteCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
    voteCount?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
    voteCount?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    voteCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VisualStateCountOrderByAggregateInput = {
    id?: SortOrder
    activeTheme?: SortOrder
    speed?: SortOrder
    intensity?: SortOrder
    colorScheme?: SortOrder
    effectIds?: SortOrder
    activeUsers?: SortOrder
    lastUpdated?: SortOrder
  }

  export type VisualStateAvgOrderByAggregateInput = {
    id?: SortOrder
    speed?: SortOrder
    intensity?: SortOrder
    activeUsers?: SortOrder
  }

  export type VisualStateMaxOrderByAggregateInput = {
    id?: SortOrder
    activeTheme?: SortOrder
    speed?: SortOrder
    intensity?: SortOrder
    colorScheme?: SortOrder
    activeUsers?: SortOrder
    lastUpdated?: SortOrder
  }

  export type VisualStateMinOrderByAggregateInput = {
    id?: SortOrder
    activeTheme?: SortOrder
    speed?: SortOrder
    intensity?: SortOrder
    colorScheme?: SortOrder
    activeUsers?: SortOrder
    lastUpdated?: SortOrder
  }

  export type VisualStateSumOrderByAggregateInput = {
    id?: SortOrder
    speed?: SortOrder
    intensity?: SortOrder
    activeUsers?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InteractionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type InteractionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    createdAt?: SortOrder
  }

  export type InteractionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    actionType?: SortOrder
    createdAt?: SortOrder
  }

  export type InteractionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DJCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    setStart?: SortOrder
    setEnd?: SortOrder
    visualPreset?: SortOrder
  }

  export type DJAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DJMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    setStart?: SortOrder
    setEnd?: SortOrder
    visualPreset?: SortOrder
  }

  export type DJMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    setStart?: SortOrder
    setEnd?: SortOrder
    visualPreset?: SortOrder
  }

  export type DJSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type InteractionCreateNestedManyWithoutUserInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type InteractionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type InteractionUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutUserInput | InteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutUserInput | InteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutUserInput | InteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type InteractionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutUserInput | InteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutUserInput | InteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutUserInput | InteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    upsert?: UserUpsertWithoutInteractionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInteractionsInput, UserUpdateWithoutInteractionsInput>, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VoteCreateWithoutUserInput = {
    theme: string
    createdAt?: Date | string
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: number
    theme: string
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InteractionCreateWithoutUserInput = {
    actionType: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InteractionUncheckedCreateWithoutUserInput = {
    id?: number
    actionType: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InteractionCreateOrConnectWithoutUserInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput>
  }

  export type InteractionCreateManyUserInputEnvelope = {
    data: InteractionCreateManyUserInput | InteractionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: IntFilter<"Vote"> | number
    userId?: StringFilter<"Vote"> | string
    theme?: StringFilter<"Vote"> | string
    createdAt?: DateTimeFilter<"Vote"> | Date | string
  }

  export type InteractionUpsertWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutUserInput, InteractionUncheckedUpdateWithoutUserInput>
    create: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutUserInput, InteractionUncheckedUpdateWithoutUserInput>
  }

  export type InteractionUpdateManyWithWhereWithoutUserInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutUserInput>
  }

  export type InteractionScalarWhereInput = {
    AND?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    OR?: InteractionScalarWhereInput[]
    NOT?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    id?: IntFilter<"Interaction"> | number
    userId?: StringFilter<"Interaction"> | string
    actionType?: StringFilter<"Interaction"> | string
    details?: JsonFilter<"Interaction">
    createdAt?: DateTimeFilter<"Interaction"> | Date | string
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    nickname?: string | null
    joinedAt?: Date | string
    lastActive?: Date | string
    voteCount?: number
    interactions?: InteractionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    nickname?: string | null
    joinedAt?: Date | string
    lastActive?: Date | string
    voteCount?: number
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    voteCount?: IntFieldUpdateOperationsInput | number
    interactions?: InteractionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    voteCount?: IntFieldUpdateOperationsInput | number
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInteractionsInput = {
    id?: string
    nickname?: string | null
    joinedAt?: Date | string
    lastActive?: Date | string
    voteCount?: number
    votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInteractionsInput = {
    id?: string
    nickname?: string | null
    joinedAt?: Date | string
    lastActive?: Date | string
    voteCount?: number
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInteractionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
  }

  export type UserUpsertWithoutInteractionsInput = {
    update: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    voteCount?: IntFieldUpdateOperationsInput | number
    votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    voteCount?: IntFieldUpdateOperationsInput | number
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VoteCreateManyUserInput = {
    id?: number
    theme: string
    createdAt?: Date | string
  }

  export type InteractionCreateManyUserInput = {
    id?: number
    actionType: string
    details: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type VoteUpdateWithoutUserInput = {
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUpdateWithoutUserInput = {
    actionType?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}