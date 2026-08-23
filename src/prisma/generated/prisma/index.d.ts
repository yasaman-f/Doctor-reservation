
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model AvailabilitySlot
 * 
 */
export type AvailabilitySlot = $Result.DefaultSelection<Prisma.$AvailabilitySlotPayload>
/**
 * Model DoctorProfile
 * 
 */
export type DoctorProfile = $Result.DefaultSelection<Prisma.$DoctorProfilePayload>
/**
 * Model PatientProfile
 * 
 */
export type PatientProfile = $Result.DefaultSelection<Prisma.$PatientProfilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELED: 'CANCELED',
  COMPLETED: 'COMPLETED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilitySlot`: Exposes CRUD operations for the **AvailabilitySlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilitySlots
    * const availabilitySlots = await prisma.availabilitySlot.findMany()
    * ```
    */
  get availabilitySlot(): Prisma.AvailabilitySlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorProfile`: Exposes CRUD operations for the **DoctorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorProfiles
    * const doctorProfiles = await prisma.doctorProfile.findMany()
    * ```
    */
  get doctorProfile(): Prisma.DoctorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientProfile`: Exposes CRUD operations for the **PatientProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientProfiles
    * const patientProfiles = await prisma.patientProfile.findMany()
    * ```
    */
  get patientProfile(): Prisma.PatientProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Appointment: 'Appointment',
    AvailabilitySlot: 'AvailabilitySlot',
    DoctorProfile: 'DoctorProfile',
    PatientProfile: 'PatientProfile',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appointment" | "availabilitySlot" | "doctorProfile" | "patientProfile" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      AvailabilitySlot: {
        payload: Prisma.$AvailabilitySlotPayload<ExtArgs>
        fields: Prisma.AvailabilitySlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilitySlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          findFirst: {
            args: Prisma.AvailabilitySlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilitySlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          findMany: {
            args: Prisma.AvailabilitySlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          create: {
            args: Prisma.AvailabilitySlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          createMany: {
            args: Prisma.AvailabilitySlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilitySlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          delete: {
            args: Prisma.AvailabilitySlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          update: {
            args: Prisma.AvailabilitySlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilitySlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilitySlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilitySlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          aggregate: {
            args: Prisma.AvailabilitySlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilitySlot>
          }
          groupBy: {
            args: Prisma.AvailabilitySlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilitySlotCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySlotCountAggregateOutputType> | number
          }
        }
      }
      DoctorProfile: {
        payload: Prisma.$DoctorProfilePayload<ExtArgs>
        fields: Prisma.DoctorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          findFirst: {
            args: Prisma.DoctorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          findMany: {
            args: Prisma.DoctorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          create: {
            args: Prisma.DoctorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          createMany: {
            args: Prisma.DoctorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          delete: {
            args: Prisma.DoctorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          update: {
            args: Prisma.DoctorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          deleteMany: {
            args: Prisma.DoctorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          upsert: {
            args: Prisma.DoctorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          aggregate: {
            args: Prisma.DoctorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorProfile>
          }
          groupBy: {
            args: Prisma.DoctorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorProfileCountAggregateOutputType> | number
          }
        }
      }
      PatientProfile: {
        payload: Prisma.$PatientProfilePayload<ExtArgs>
        fields: Prisma.PatientProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          findFirst: {
            args: Prisma.PatientProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          findMany: {
            args: Prisma.PatientProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>[]
          }
          create: {
            args: Prisma.PatientProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          createMany: {
            args: Prisma.PatientProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>[]
          }
          delete: {
            args: Prisma.PatientProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          update: {
            args: Prisma.PatientProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          deleteMany: {
            args: Prisma.PatientProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>[]
          }
          upsert: {
            args: Prisma.PatientProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientProfilePayload>
          }
          aggregate: {
            args: Prisma.PatientProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientProfile>
          }
          groupBy: {
            args: Prisma.PatientProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientProfileCountArgs<ExtArgs>
            result: $Utils.Optional<PatientProfileCountAggregateOutputType> | number
          }
        }
      }
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    appointment?: AppointmentOmit
    availabilitySlot?: AvailabilitySlotOmit
    doctorProfile?: DoctorProfileOmit
    patientProfile?: PatientProfileOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DoctorProfileCountOutputType
   */

  export type DoctorProfileCountOutputType = {
    appointments: number
    availabilitySlots: number
  }

  export type DoctorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | DoctorProfileCountOutputTypeCountAppointmentsArgs
    availabilitySlots?: boolean | DoctorProfileCountOutputTypeCountAvailabilitySlotsArgs
  }

  // Custom InputTypes
  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfileCountOutputType
     */
    select?: DoctorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountAvailabilitySlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
  }


  /**
   * Count Type PatientProfileCountOutputType
   */

  export type PatientProfileCountOutputType = {
    appointments: number
  }

  export type PatientProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientProfileCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * PatientProfileCountOutputType without action
   */
  export type PatientProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfileCountOutputType
     */
    select?: PatientProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientProfileCountOutputType without action
   */
  export type PatientProfileCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    patientProfileId: string | null
    doctorId: string | null
    availabilitySlotId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    patientProfileId: string | null
    doctorId: string | null
    availabilitySlotId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientProfileId: number
    doctorId: number
    availabilitySlotId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    patientProfileId?: true
    doctorId?: true
    availabilitySlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientProfileId?: true
    doctorId?: true
    availabilitySlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientProfileId?: true
    doctorId?: true
    availabilitySlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    patientProfileId: string
    doctorId: string
    availabilitySlotId: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientProfileId?: boolean
    doctorId?: boolean
    availabilitySlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientProfile?: boolean | PatientProfileDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientProfileId?: boolean
    doctorId?: boolean
    availabilitySlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientProfile?: boolean | PatientProfileDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientProfileId?: boolean
    doctorId?: boolean
    availabilitySlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientProfile?: boolean | PatientProfileDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    patientProfileId?: boolean
    doctorId?: boolean
    availabilitySlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientProfileId" | "doctorId" | "availabilitySlotId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientProfile?: boolean | PatientProfileDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientProfile?: boolean | PatientProfileDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientProfile?: boolean | PatientProfileDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    availabilitySlot?: boolean | AvailabilitySlotDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patientProfile: Prisma.$PatientProfilePayload<ExtArgs>
      doctor: Prisma.$DoctorProfilePayload<ExtArgs>
      availabilitySlot: Prisma.$AvailabilitySlotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientProfileId: string
      doctorId: string
      availabilitySlotId: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patientProfile<T extends PatientProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientProfileDefaultArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availabilitySlot<T extends AvailabilitySlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilitySlotDefaultArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly patientProfileId: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly availabilitySlotId: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'Status'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilitySlot
   */

  export type AggregateAvailabilitySlot = {
    _count: AvailabilitySlotCountAggregateOutputType | null
    _min: AvailabilitySlotMinAggregateOutputType | null
    _max: AvailabilitySlotMaxAggregateOutputType | null
  }

  export type AvailabilitySlotMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    startTime: Date | null
    endTime: Date | null
    isBooked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilitySlotMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    startTime: Date | null
    endTime: Date | null
    isBooked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilitySlotCountAggregateOutputType = {
    id: number
    doctorId: number
    startTime: number
    endTime: number
    isBooked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilitySlotMinAggregateInputType = {
    id?: true
    doctorId?: true
    startTime?: true
    endTime?: true
    isBooked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilitySlotMaxAggregateInputType = {
    id?: true
    doctorId?: true
    startTime?: true
    endTime?: true
    isBooked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilitySlotCountAggregateInputType = {
    id?: true
    doctorId?: true
    startTime?: true
    endTime?: true
    isBooked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilitySlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySlot to aggregate.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilitySlots
    **/
    _count?: true | AvailabilitySlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilitySlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilitySlotMaxAggregateInputType
  }

  export type GetAvailabilitySlotAggregateType<T extends AvailabilitySlotAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilitySlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilitySlot[P]>
      : GetScalarType<T[P], AggregateAvailabilitySlot[P]>
  }




  export type AvailabilitySlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithAggregationInput | AvailabilitySlotOrderByWithAggregationInput[]
    by: AvailabilitySlotScalarFieldEnum[] | AvailabilitySlotScalarFieldEnum
    having?: AvailabilitySlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilitySlotCountAggregateInputType | true
    _min?: AvailabilitySlotMinAggregateInputType
    _max?: AvailabilitySlotMaxAggregateInputType
  }

  export type AvailabilitySlotGroupByOutputType = {
    id: string
    doctorId: string
    startTime: Date
    endTime: Date
    isBooked: boolean
    createdAt: Date
    updatedAt: Date
    _count: AvailabilitySlotCountAggregateOutputType | null
    _min: AvailabilitySlotMinAggregateOutputType | null
    _max: AvailabilitySlotMaxAggregateOutputType | null
  }

  type GetAvailabilitySlotGroupByPayload<T extends AvailabilitySlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilitySlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilitySlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilitySlotGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilitySlotGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    startTime?: boolean
    endTime?: boolean
    isBooked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    appointment?: boolean | AvailabilitySlot$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    startTime?: boolean
    endTime?: boolean
    isBooked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    startTime?: boolean
    endTime?: boolean
    isBooked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectScalar = {
    id?: boolean
    doctorId?: boolean
    startTime?: boolean
    endTime?: boolean
    isBooked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvailabilitySlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "startTime" | "endTime" | "isBooked" | "createdAt" | "updatedAt", ExtArgs["result"]["availabilitySlot"]>
  export type AvailabilitySlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    appointment?: boolean | AvailabilitySlot$appointmentArgs<ExtArgs>
  }
  export type AvailabilitySlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }
  export type AvailabilitySlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }

  export type $AvailabilitySlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilitySlot"
    objects: {
      doctor: Prisma.$DoctorProfilePayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      startTime: Date
      endTime: Date
      isBooked: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availabilitySlot"]>
    composites: {}
  }

  type AvailabilitySlotGetPayload<S extends boolean | null | undefined | AvailabilitySlotDefaultArgs> = $Result.GetResult<Prisma.$AvailabilitySlotPayload, S>

  type AvailabilitySlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilitySlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilitySlotCountAggregateInputType | true
    }

  export interface AvailabilitySlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilitySlot'], meta: { name: 'AvailabilitySlot' } }
    /**
     * Find zero or one AvailabilitySlot that matches the filter.
     * @param {AvailabilitySlotFindUniqueArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilitySlotFindUniqueArgs>(args: SelectSubset<T, AvailabilitySlotFindUniqueArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilitySlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilitySlotFindUniqueOrThrowArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilitySlotFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindFirstArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilitySlotFindFirstArgs>(args?: SelectSubset<T, AvailabilitySlotFindFirstArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindFirstOrThrowArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilitySlotFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilitySlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilitySlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilitySlots
     * const availabilitySlots = await prisma.availabilitySlot.findMany()
     * 
     * // Get first 10 AvailabilitySlots
     * const availabilitySlots = await prisma.availabilitySlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilitySlotFindManyArgs>(args?: SelectSubset<T, AvailabilitySlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilitySlot.
     * @param {AvailabilitySlotCreateArgs} args - Arguments to create a AvailabilitySlot.
     * @example
     * // Create one AvailabilitySlot
     * const AvailabilitySlot = await prisma.availabilitySlot.create({
     *   data: {
     *     // ... data to create a AvailabilitySlot
     *   }
     * })
     * 
     */
    create<T extends AvailabilitySlotCreateArgs>(args: SelectSubset<T, AvailabilitySlotCreateArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilitySlots.
     * @param {AvailabilitySlotCreateManyArgs} args - Arguments to create many AvailabilitySlots.
     * @example
     * // Create many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilitySlotCreateManyArgs>(args?: SelectSubset<T, AvailabilitySlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilitySlots and returns the data saved in the database.
     * @param {AvailabilitySlotCreateManyAndReturnArgs} args - Arguments to create many AvailabilitySlots.
     * @example
     * // Create many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilitySlots and only return the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilitySlotCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilitySlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilitySlot.
     * @param {AvailabilitySlotDeleteArgs} args - Arguments to delete one AvailabilitySlot.
     * @example
     * // Delete one AvailabilitySlot
     * const AvailabilitySlot = await prisma.availabilitySlot.delete({
     *   where: {
     *     // ... filter to delete one AvailabilitySlot
     *   }
     * })
     * 
     */
    delete<T extends AvailabilitySlotDeleteArgs>(args: SelectSubset<T, AvailabilitySlotDeleteArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilitySlot.
     * @param {AvailabilitySlotUpdateArgs} args - Arguments to update one AvailabilitySlot.
     * @example
     * // Update one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilitySlotUpdateArgs>(args: SelectSubset<T, AvailabilitySlotUpdateArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilitySlots.
     * @param {AvailabilitySlotDeleteManyArgs} args - Arguments to filter AvailabilitySlots to delete.
     * @example
     * // Delete a few AvailabilitySlots
     * const { count } = await prisma.availabilitySlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilitySlotDeleteManyArgs>(args?: SelectSubset<T, AvailabilitySlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilitySlotUpdateManyArgs>(args: SelectSubset<T, AvailabilitySlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySlots and returns the data updated in the database.
     * @param {AvailabilitySlotUpdateManyAndReturnArgs} args - Arguments to update many AvailabilitySlots.
     * @example
     * // Update many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilitySlots and only return the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilitySlotUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilitySlot.
     * @param {AvailabilitySlotUpsertArgs} args - Arguments to update or create a AvailabilitySlot.
     * @example
     * // Update or create a AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.upsert({
     *   create: {
     *     // ... data to create a AvailabilitySlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilitySlot we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilitySlotUpsertArgs>(args: SelectSubset<T, AvailabilitySlotUpsertArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotCountArgs} args - Arguments to filter AvailabilitySlots to count.
     * @example
     * // Count the number of AvailabilitySlots
     * const count = await prisma.availabilitySlot.count({
     *   where: {
     *     // ... the filter for the AvailabilitySlots we want to count
     *   }
     * })
    **/
    count<T extends AvailabilitySlotCountArgs>(
      args?: Subset<T, AvailabilitySlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilitySlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilitySlotAggregateArgs>(args: Subset<T, AvailabilitySlotAggregateArgs>): Prisma.PrismaPromise<GetAvailabilitySlotAggregateType<T>>

    /**
     * Group by AvailabilitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotGroupByArgs} args - Group by arguments.
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
      T extends AvailabilitySlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilitySlotGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilitySlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilitySlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilitySlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilitySlot model
   */
  readonly fields: AvailabilitySlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilitySlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilitySlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends AvailabilitySlot$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilitySlot$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AvailabilitySlot model
   */
  interface AvailabilitySlotFieldRefs {
    readonly id: FieldRef<"AvailabilitySlot", 'String'>
    readonly doctorId: FieldRef<"AvailabilitySlot", 'String'>
    readonly startTime: FieldRef<"AvailabilitySlot", 'DateTime'>
    readonly endTime: FieldRef<"AvailabilitySlot", 'DateTime'>
    readonly isBooked: FieldRef<"AvailabilitySlot", 'Boolean'>
    readonly createdAt: FieldRef<"AvailabilitySlot", 'DateTime'>
    readonly updatedAt: FieldRef<"AvailabilitySlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilitySlot findUnique
   */
  export type AvailabilitySlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot findUniqueOrThrow
   */
  export type AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot findFirst
   */
  export type AvailabilitySlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot findFirstOrThrow
   */
  export type AvailabilitySlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot findMany
   */
  export type AvailabilitySlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlots to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot create
   */
  export type AvailabilitySlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilitySlot.
     */
    data: XOR<AvailabilitySlotCreateInput, AvailabilitySlotUncheckedCreateInput>
  }

  /**
   * AvailabilitySlot createMany
   */
  export type AvailabilitySlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilitySlots.
     */
    data: AvailabilitySlotCreateManyInput | AvailabilitySlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilitySlot createManyAndReturn
   */
  export type AvailabilitySlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilitySlots.
     */
    data: AvailabilitySlotCreateManyInput | AvailabilitySlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySlot update
   */
  export type AvailabilitySlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilitySlot.
     */
    data: XOR<AvailabilitySlotUpdateInput, AvailabilitySlotUncheckedUpdateInput>
    /**
     * Choose, which AvailabilitySlot to update.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot updateMany
   */
  export type AvailabilitySlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilitySlots.
     */
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySlots to update
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to update.
     */
    limit?: number
  }

  /**
   * AvailabilitySlot updateManyAndReturn
   */
  export type AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilitySlots.
     */
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySlots to update
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySlot upsert
   */
  export type AvailabilitySlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilitySlot to update in case it exists.
     */
    where: AvailabilitySlotWhereUniqueInput
    /**
     * In case the AvailabilitySlot found by the `where` argument doesn't exist, create a new AvailabilitySlot with this data.
     */
    create: XOR<AvailabilitySlotCreateInput, AvailabilitySlotUncheckedCreateInput>
    /**
     * In case the AvailabilitySlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilitySlotUpdateInput, AvailabilitySlotUncheckedUpdateInput>
  }

  /**
   * AvailabilitySlot delete
   */
  export type AvailabilitySlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter which AvailabilitySlot to delete.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot deleteMany
   */
  export type AvailabilitySlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySlots to delete
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to delete.
     */
    limit?: number
  }

  /**
   * AvailabilitySlot.appointment
   */
  export type AvailabilitySlot$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * AvailabilitySlot without action
   */
  export type AvailabilitySlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
  }


  /**
   * Model DoctorProfile
   */

  export type AggregateDoctorProfile = {
    _count: DoctorProfileCountAggregateOutputType | null
    _min: DoctorProfileMinAggregateOutputType | null
    _max: DoctorProfileMaxAggregateOutputType | null
  }

  export type DoctorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    specialty: string | null
    licenseNo: string | null
    bio: string | null
  }

  export type DoctorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    specialty: string | null
    licenseNo: string | null
    bio: string | null
  }

  export type DoctorProfileCountAggregateOutputType = {
    id: number
    userId: number
    specialty: number
    licenseNo: number
    bio: number
    _all: number
  }


  export type DoctorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    specialty?: true
    licenseNo?: true
    bio?: true
  }

  export type DoctorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    specialty?: true
    licenseNo?: true
    bio?: true
  }

  export type DoctorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    specialty?: true
    licenseNo?: true
    bio?: true
    _all?: true
  }

  export type DoctorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorProfile to aggregate.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorProfiles
    **/
    _count?: true | DoctorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorProfileMaxAggregateInputType
  }

  export type GetDoctorProfileAggregateType<T extends DoctorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorProfile[P]>
      : GetScalarType<T[P], AggregateDoctorProfile[P]>
  }




  export type DoctorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorProfileWhereInput
    orderBy?: DoctorProfileOrderByWithAggregationInput | DoctorProfileOrderByWithAggregationInput[]
    by: DoctorProfileScalarFieldEnum[] | DoctorProfileScalarFieldEnum
    having?: DoctorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorProfileCountAggregateInputType | true
    _min?: DoctorProfileMinAggregateInputType
    _max?: DoctorProfileMaxAggregateInputType
  }

  export type DoctorProfileGroupByOutputType = {
    id: string
    userId: string
    specialty: string
    licenseNo: string
    bio: string | null
    _count: DoctorProfileCountAggregateOutputType | null
    _min: DoctorProfileMinAggregateOutputType | null
    _max: DoctorProfileMaxAggregateOutputType | null
  }

  type GetDoctorProfileGroupByPayload<T extends DoctorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorProfileGroupByOutputType[P]>
        }
      >
    >


  export type DoctorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialty?: boolean
    licenseNo?: boolean
    bio?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | DoctorProfile$appointmentsArgs<ExtArgs>
    availabilitySlots?: boolean | DoctorProfile$availabilitySlotsArgs<ExtArgs>
    _count?: boolean | DoctorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialty?: boolean
    licenseNo?: boolean
    bio?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialty?: boolean
    licenseNo?: boolean
    bio?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    specialty?: boolean
    licenseNo?: boolean
    bio?: boolean
  }

  export type DoctorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialty" | "licenseNo" | "bio", ExtArgs["result"]["doctorProfile"]>
  export type DoctorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | DoctorProfile$appointmentsArgs<ExtArgs>
    availabilitySlots?: boolean | DoctorProfile$availabilitySlotsArgs<ExtArgs>
    _count?: boolean | DoctorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      availabilitySlots: Prisma.$AvailabilitySlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      specialty: string
      licenseNo: string
      bio: string | null
    }, ExtArgs["result"]["doctorProfile"]>
    composites: {}
  }

  type DoctorProfileGetPayload<S extends boolean | null | undefined | DoctorProfileDefaultArgs> = $Result.GetResult<Prisma.$DoctorProfilePayload, S>

  type DoctorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorProfileCountAggregateInputType | true
    }

  export interface DoctorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorProfile'], meta: { name: 'DoctorProfile' } }
    /**
     * Find zero or one DoctorProfile that matches the filter.
     * @param {DoctorProfileFindUniqueArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorProfileFindUniqueArgs>(args: SelectSubset<T, DoctorProfileFindUniqueArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorProfileFindUniqueOrThrowArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindFirstArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorProfileFindFirstArgs>(args?: SelectSubset<T, DoctorProfileFindFirstArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindFirstOrThrowArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorProfiles
     * const doctorProfiles = await prisma.doctorProfile.findMany()
     * 
     * // Get first 10 DoctorProfiles
     * const doctorProfiles = await prisma.doctorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorProfileFindManyArgs>(args?: SelectSubset<T, DoctorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorProfile.
     * @param {DoctorProfileCreateArgs} args - Arguments to create a DoctorProfile.
     * @example
     * // Create one DoctorProfile
     * const DoctorProfile = await prisma.doctorProfile.create({
     *   data: {
     *     // ... data to create a DoctorProfile
     *   }
     * })
     * 
     */
    create<T extends DoctorProfileCreateArgs>(args: SelectSubset<T, DoctorProfileCreateArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorProfiles.
     * @param {DoctorProfileCreateManyArgs} args - Arguments to create many DoctorProfiles.
     * @example
     * // Create many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorProfileCreateManyArgs>(args?: SelectSubset<T, DoctorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorProfiles and returns the data saved in the database.
     * @param {DoctorProfileCreateManyAndReturnArgs} args - Arguments to create many DoctorProfiles.
     * @example
     * // Create many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorProfiles and only return the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorProfile.
     * @param {DoctorProfileDeleteArgs} args - Arguments to delete one DoctorProfile.
     * @example
     * // Delete one DoctorProfile
     * const DoctorProfile = await prisma.doctorProfile.delete({
     *   where: {
     *     // ... filter to delete one DoctorProfile
     *   }
     * })
     * 
     */
    delete<T extends DoctorProfileDeleteArgs>(args: SelectSubset<T, DoctorProfileDeleteArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorProfile.
     * @param {DoctorProfileUpdateArgs} args - Arguments to update one DoctorProfile.
     * @example
     * // Update one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorProfileUpdateArgs>(args: SelectSubset<T, DoctorProfileUpdateArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorProfiles.
     * @param {DoctorProfileDeleteManyArgs} args - Arguments to filter DoctorProfiles to delete.
     * @example
     * // Delete a few DoctorProfiles
     * const { count } = await prisma.doctorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorProfileDeleteManyArgs>(args?: SelectSubset<T, DoctorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorProfileUpdateManyArgs>(args: SelectSubset<T, DoctorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorProfiles and returns the data updated in the database.
     * @param {DoctorProfileUpdateManyAndReturnArgs} args - Arguments to update many DoctorProfiles.
     * @example
     * // Update many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorProfiles and only return the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorProfile.
     * @param {DoctorProfileUpsertArgs} args - Arguments to update or create a DoctorProfile.
     * @example
     * // Update or create a DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.upsert({
     *   create: {
     *     // ... data to create a DoctorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorProfile we want to update
     *   }
     * })
     */
    upsert<T extends DoctorProfileUpsertArgs>(args: SelectSubset<T, DoctorProfileUpsertArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileCountArgs} args - Arguments to filter DoctorProfiles to count.
     * @example
     * // Count the number of DoctorProfiles
     * const count = await prisma.doctorProfile.count({
     *   where: {
     *     // ... the filter for the DoctorProfiles we want to count
     *   }
     * })
    **/
    count<T extends DoctorProfileCountArgs>(
      args?: Subset<T, DoctorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorProfileAggregateArgs>(args: Subset<T, DoctorProfileAggregateArgs>): Prisma.PrismaPromise<GetDoctorProfileAggregateType<T>>

    /**
     * Group by DoctorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileGroupByArgs} args - Group by arguments.
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
      T extends DoctorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorProfileGroupByArgs['orderBy'] }
        : { orderBy?: DoctorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorProfile model
   */
  readonly fields: DoctorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends DoctorProfile$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availabilitySlots<T extends DoctorProfile$availabilitySlotsArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$availabilitySlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DoctorProfile model
   */
  interface DoctorProfileFieldRefs {
    readonly id: FieldRef<"DoctorProfile", 'String'>
    readonly userId: FieldRef<"DoctorProfile", 'String'>
    readonly specialty: FieldRef<"DoctorProfile", 'String'>
    readonly licenseNo: FieldRef<"DoctorProfile", 'String'>
    readonly bio: FieldRef<"DoctorProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoctorProfile findUnique
   */
  export type DoctorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile findUniqueOrThrow
   */
  export type DoctorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile findFirst
   */
  export type DoctorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile findFirstOrThrow
   */
  export type DoctorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile findMany
   */
  export type DoctorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfiles to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile create
   */
  export type DoctorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorProfile.
     */
    data: XOR<DoctorProfileCreateInput, DoctorProfileUncheckedCreateInput>
  }

  /**
   * DoctorProfile createMany
   */
  export type DoctorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorProfiles.
     */
    data: DoctorProfileCreateManyInput | DoctorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorProfile createManyAndReturn
   */
  export type DoctorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorProfiles.
     */
    data: DoctorProfileCreateManyInput | DoctorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorProfile update
   */
  export type DoctorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorProfile.
     */
    data: XOR<DoctorProfileUpdateInput, DoctorProfileUncheckedUpdateInput>
    /**
     * Choose, which DoctorProfile to update.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile updateMany
   */
  export type DoctorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorProfiles.
     */
    data: XOR<DoctorProfileUpdateManyMutationInput, DoctorProfileUncheckedUpdateManyInput>
    /**
     * Filter which DoctorProfiles to update
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to update.
     */
    limit?: number
  }

  /**
   * DoctorProfile updateManyAndReturn
   */
  export type DoctorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * The data used to update DoctorProfiles.
     */
    data: XOR<DoctorProfileUpdateManyMutationInput, DoctorProfileUncheckedUpdateManyInput>
    /**
     * Filter which DoctorProfiles to update
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorProfile upsert
   */
  export type DoctorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorProfile to update in case it exists.
     */
    where: DoctorProfileWhereUniqueInput
    /**
     * In case the DoctorProfile found by the `where` argument doesn't exist, create a new DoctorProfile with this data.
     */
    create: XOR<DoctorProfileCreateInput, DoctorProfileUncheckedCreateInput>
    /**
     * In case the DoctorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorProfileUpdateInput, DoctorProfileUncheckedUpdateInput>
  }

  /**
   * DoctorProfile delete
   */
  export type DoctorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter which DoctorProfile to delete.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile deleteMany
   */
  export type DoctorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorProfiles to delete
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to delete.
     */
    limit?: number
  }

  /**
   * DoctorProfile.appointments
   */
  export type DoctorProfile$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * DoctorProfile.availabilitySlots
   */
  export type DoctorProfile$availabilitySlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    cursor?: AvailabilitySlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * DoctorProfile without action
   */
  export type DoctorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
  }


  /**
   * Model PatientProfile
   */

  export type AggregatePatientProfile = {
    _count: PatientProfileCountAggregateOutputType | null
    _min: PatientProfileMinAggregateOutputType | null
    _max: PatientProfileMaxAggregateOutputType | null
  }

  export type PatientProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dateOfBirth: Date | null
    nationalId: string | null
  }

  export type PatientProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dateOfBirth: Date | null
    nationalId: string | null
  }

  export type PatientProfileCountAggregateOutputType = {
    id: number
    userId: number
    dateOfBirth: number
    nationalId: number
    _all: number
  }


  export type PatientProfileMinAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    nationalId?: true
  }

  export type PatientProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    nationalId?: true
  }

  export type PatientProfileCountAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    nationalId?: true
    _all?: true
  }

  export type PatientProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientProfile to aggregate.
     */
    where?: PatientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientProfiles to fetch.
     */
    orderBy?: PatientProfileOrderByWithRelationInput | PatientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientProfiles
    **/
    _count?: true | PatientProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientProfileMaxAggregateInputType
  }

  export type GetPatientProfileAggregateType<T extends PatientProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientProfile[P]>
      : GetScalarType<T[P], AggregatePatientProfile[P]>
  }




  export type PatientProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientProfileWhereInput
    orderBy?: PatientProfileOrderByWithAggregationInput | PatientProfileOrderByWithAggregationInput[]
    by: PatientProfileScalarFieldEnum[] | PatientProfileScalarFieldEnum
    having?: PatientProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientProfileCountAggregateInputType | true
    _min?: PatientProfileMinAggregateInputType
    _max?: PatientProfileMaxAggregateInputType
  }

  export type PatientProfileGroupByOutputType = {
    id: string
    userId: string
    dateOfBirth: Date | null
    nationalId: string
    _count: PatientProfileCountAggregateOutputType | null
    _min: PatientProfileMinAggregateOutputType | null
    _max: PatientProfileMaxAggregateOutputType | null
  }

  type GetPatientProfileGroupByPayload<T extends PatientProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PatientProfileGroupByOutputType[P]>
        }
      >
    >


  export type PatientProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    nationalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | PatientProfile$appointmentsArgs<ExtArgs>
    _count?: boolean | PatientProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientProfile"]>

  export type PatientProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    nationalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientProfile"]>

  export type PatientProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    nationalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientProfile"]>

  export type PatientProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    nationalId?: boolean
  }

  export type PatientProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateOfBirth" | "nationalId", ExtArgs["result"]["patientProfile"]>
  export type PatientProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | PatientProfile$appointmentsArgs<ExtArgs>
    _count?: boolean | PatientProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dateOfBirth: Date | null
      nationalId: string
    }, ExtArgs["result"]["patientProfile"]>
    composites: {}
  }

  type PatientProfileGetPayload<S extends boolean | null | undefined | PatientProfileDefaultArgs> = $Result.GetResult<Prisma.$PatientProfilePayload, S>

  type PatientProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientProfileCountAggregateInputType | true
    }

  export interface PatientProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientProfile'], meta: { name: 'PatientProfile' } }
    /**
     * Find zero or one PatientProfile that matches the filter.
     * @param {PatientProfileFindUniqueArgs} args - Arguments to find a PatientProfile
     * @example
     * // Get one PatientProfile
     * const patientProfile = await prisma.patientProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientProfileFindUniqueArgs>(args: SelectSubset<T, PatientProfileFindUniqueArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientProfileFindUniqueOrThrowArgs} args - Arguments to find a PatientProfile
     * @example
     * // Get one PatientProfile
     * const patientProfile = await prisma.patientProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileFindFirstArgs} args - Arguments to find a PatientProfile
     * @example
     * // Get one PatientProfile
     * const patientProfile = await prisma.patientProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientProfileFindFirstArgs>(args?: SelectSubset<T, PatientProfileFindFirstArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileFindFirstOrThrowArgs} args - Arguments to find a PatientProfile
     * @example
     * // Get one PatientProfile
     * const patientProfile = await prisma.patientProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientProfiles
     * const patientProfiles = await prisma.patientProfile.findMany()
     * 
     * // Get first 10 PatientProfiles
     * const patientProfiles = await prisma.patientProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientProfileWithIdOnly = await prisma.patientProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientProfileFindManyArgs>(args?: SelectSubset<T, PatientProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientProfile.
     * @param {PatientProfileCreateArgs} args - Arguments to create a PatientProfile.
     * @example
     * // Create one PatientProfile
     * const PatientProfile = await prisma.patientProfile.create({
     *   data: {
     *     // ... data to create a PatientProfile
     *   }
     * })
     * 
     */
    create<T extends PatientProfileCreateArgs>(args: SelectSubset<T, PatientProfileCreateArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientProfiles.
     * @param {PatientProfileCreateManyArgs} args - Arguments to create many PatientProfiles.
     * @example
     * // Create many PatientProfiles
     * const patientProfile = await prisma.patientProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientProfileCreateManyArgs>(args?: SelectSubset<T, PatientProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientProfiles and returns the data saved in the database.
     * @param {PatientProfileCreateManyAndReturnArgs} args - Arguments to create many PatientProfiles.
     * @example
     * // Create many PatientProfiles
     * const patientProfile = await prisma.patientProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientProfiles and only return the `id`
     * const patientProfileWithIdOnly = await prisma.patientProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientProfile.
     * @param {PatientProfileDeleteArgs} args - Arguments to delete one PatientProfile.
     * @example
     * // Delete one PatientProfile
     * const PatientProfile = await prisma.patientProfile.delete({
     *   where: {
     *     // ... filter to delete one PatientProfile
     *   }
     * })
     * 
     */
    delete<T extends PatientProfileDeleteArgs>(args: SelectSubset<T, PatientProfileDeleteArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientProfile.
     * @param {PatientProfileUpdateArgs} args - Arguments to update one PatientProfile.
     * @example
     * // Update one PatientProfile
     * const patientProfile = await prisma.patientProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientProfileUpdateArgs>(args: SelectSubset<T, PatientProfileUpdateArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientProfiles.
     * @param {PatientProfileDeleteManyArgs} args - Arguments to filter PatientProfiles to delete.
     * @example
     * // Delete a few PatientProfiles
     * const { count } = await prisma.patientProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientProfileDeleteManyArgs>(args?: SelectSubset<T, PatientProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientProfiles
     * const patientProfile = await prisma.patientProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientProfileUpdateManyArgs>(args: SelectSubset<T, PatientProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientProfiles and returns the data updated in the database.
     * @param {PatientProfileUpdateManyAndReturnArgs} args - Arguments to update many PatientProfiles.
     * @example
     * // Update many PatientProfiles
     * const patientProfile = await prisma.patientProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientProfiles and only return the `id`
     * const patientProfileWithIdOnly = await prisma.patientProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientProfile.
     * @param {PatientProfileUpsertArgs} args - Arguments to update or create a PatientProfile.
     * @example
     * // Update or create a PatientProfile
     * const patientProfile = await prisma.patientProfile.upsert({
     *   create: {
     *     // ... data to create a PatientProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientProfile we want to update
     *   }
     * })
     */
    upsert<T extends PatientProfileUpsertArgs>(args: SelectSubset<T, PatientProfileUpsertArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileCountArgs} args - Arguments to filter PatientProfiles to count.
     * @example
     * // Count the number of PatientProfiles
     * const count = await prisma.patientProfile.count({
     *   where: {
     *     // ... the filter for the PatientProfiles we want to count
     *   }
     * })
    **/
    count<T extends PatientProfileCountArgs>(
      args?: Subset<T, PatientProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientProfileAggregateArgs>(args: Subset<T, PatientProfileAggregateArgs>): Prisma.PrismaPromise<GetPatientProfileAggregateType<T>>

    /**
     * Group by PatientProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientProfileGroupByArgs} args - Group by arguments.
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
      T extends PatientProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientProfileGroupByArgs['orderBy'] }
        : { orderBy?: PatientProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientProfile model
   */
  readonly fields: PatientProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends PatientProfile$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, PatientProfile$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PatientProfile model
   */
  interface PatientProfileFieldRefs {
    readonly id: FieldRef<"PatientProfile", 'String'>
    readonly userId: FieldRef<"PatientProfile", 'String'>
    readonly dateOfBirth: FieldRef<"PatientProfile", 'DateTime'>
    readonly nationalId: FieldRef<"PatientProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PatientProfile findUnique
   */
  export type PatientProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfile to fetch.
     */
    where: PatientProfileWhereUniqueInput
  }

  /**
   * PatientProfile findUniqueOrThrow
   */
  export type PatientProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfile to fetch.
     */
    where: PatientProfileWhereUniqueInput
  }

  /**
   * PatientProfile findFirst
   */
  export type PatientProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfile to fetch.
     */
    where?: PatientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientProfiles to fetch.
     */
    orderBy?: PatientProfileOrderByWithRelationInput | PatientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientProfiles.
     */
    cursor?: PatientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientProfiles.
     */
    distinct?: PatientProfileScalarFieldEnum | PatientProfileScalarFieldEnum[]
  }

  /**
   * PatientProfile findFirstOrThrow
   */
  export type PatientProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfile to fetch.
     */
    where?: PatientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientProfiles to fetch.
     */
    orderBy?: PatientProfileOrderByWithRelationInput | PatientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientProfiles.
     */
    cursor?: PatientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientProfiles.
     */
    distinct?: PatientProfileScalarFieldEnum | PatientProfileScalarFieldEnum[]
  }

  /**
   * PatientProfile findMany
   */
  export type PatientProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter, which PatientProfiles to fetch.
     */
    where?: PatientProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientProfiles to fetch.
     */
    orderBy?: PatientProfileOrderByWithRelationInput | PatientProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientProfiles.
     */
    cursor?: PatientProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientProfiles.
     */
    distinct?: PatientProfileScalarFieldEnum | PatientProfileScalarFieldEnum[]
  }

  /**
   * PatientProfile create
   */
  export type PatientProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientProfile.
     */
    data: XOR<PatientProfileCreateInput, PatientProfileUncheckedCreateInput>
  }

  /**
   * PatientProfile createMany
   */
  export type PatientProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientProfiles.
     */
    data: PatientProfileCreateManyInput | PatientProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientProfile createManyAndReturn
   */
  export type PatientProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * The data used to create many PatientProfiles.
     */
    data: PatientProfileCreateManyInput | PatientProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientProfile update
   */
  export type PatientProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientProfile.
     */
    data: XOR<PatientProfileUpdateInput, PatientProfileUncheckedUpdateInput>
    /**
     * Choose, which PatientProfile to update.
     */
    where: PatientProfileWhereUniqueInput
  }

  /**
   * PatientProfile updateMany
   */
  export type PatientProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientProfiles.
     */
    data: XOR<PatientProfileUpdateManyMutationInput, PatientProfileUncheckedUpdateManyInput>
    /**
     * Filter which PatientProfiles to update
     */
    where?: PatientProfileWhereInput
    /**
     * Limit how many PatientProfiles to update.
     */
    limit?: number
  }

  /**
   * PatientProfile updateManyAndReturn
   */
  export type PatientProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * The data used to update PatientProfiles.
     */
    data: XOR<PatientProfileUpdateManyMutationInput, PatientProfileUncheckedUpdateManyInput>
    /**
     * Filter which PatientProfiles to update
     */
    where?: PatientProfileWhereInput
    /**
     * Limit how many PatientProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientProfile upsert
   */
  export type PatientProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientProfile to update in case it exists.
     */
    where: PatientProfileWhereUniqueInput
    /**
     * In case the PatientProfile found by the `where` argument doesn't exist, create a new PatientProfile with this data.
     */
    create: XOR<PatientProfileCreateInput, PatientProfileUncheckedCreateInput>
    /**
     * In case the PatientProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientProfileUpdateInput, PatientProfileUncheckedUpdateInput>
  }

  /**
   * PatientProfile delete
   */
  export type PatientProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    /**
     * Filter which PatientProfile to delete.
     */
    where: PatientProfileWhereUniqueInput
  }

  /**
   * PatientProfile deleteMany
   */
  export type PatientProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientProfiles to delete
     */
    where?: PatientProfileWhereInput
    /**
     * Limit how many PatientProfiles to delete.
     */
    limit?: number
  }

  /**
   * PatientProfile.appointments
   */
  export type PatientProfile$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * PatientProfile without action
   */
  export type PatientProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    firstName: number
    lastName: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "firstName" | "lastName" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs> | null
      patientProfile: Prisma.$PatientProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      firstName: string
      lastName: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
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
    doctorProfile<T extends User$doctorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorProfileArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patientProfile<T extends User$patientProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$patientProfileArgs<ExtArgs>>): Prisma__PatientProfileClient<$Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.doctorProfile
   */
  export type User$doctorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    where?: DoctorProfileWhereInput
  }

  /**
   * User.patientProfile
   */
  export type User$patientProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientProfile
     */
    select?: PatientProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientProfile
     */
    omit?: PatientProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientProfileInclude<ExtArgs> | null
    where?: PatientProfileWhereInput
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientProfileId: 'patientProfileId',
    doctorId: 'doctorId',
    availabilitySlotId: 'availabilitySlotId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const AvailabilitySlotScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    startTime: 'startTime',
    endTime: 'endTime',
    isBooked: 'isBooked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilitySlotScalarFieldEnum = (typeof AvailabilitySlotScalarFieldEnum)[keyof typeof AvailabilitySlotScalarFieldEnum]


  export const DoctorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialty: 'specialty',
    licenseNo: 'licenseNo',
    bio: 'bio'
  };

  export type DoctorProfileScalarFieldEnum = (typeof DoctorProfileScalarFieldEnum)[keyof typeof DoctorProfileScalarFieldEnum]


  export const PatientProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateOfBirth: 'dateOfBirth',
    nationalId: 'nationalId'
  };

  export type PatientProfileScalarFieldEnum = (typeof PatientProfileScalarFieldEnum)[keyof typeof PatientProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientProfileId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    availabilitySlotId?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patientProfile?: XOR<PatientProfileScalarRelationFilter, PatientProfileWhereInput>
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    availabilitySlot?: XOR<AvailabilitySlotScalarRelationFilter, AvailabilitySlotWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientProfileId?: SortOrder
    doctorId?: SortOrder
    availabilitySlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientProfile?: PatientProfileOrderByWithRelationInput
    doctor?: DoctorProfileOrderByWithRelationInput
    availabilitySlot?: AvailabilitySlotOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    availabilitySlotId?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    patientProfileId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patientProfile?: XOR<PatientProfileScalarRelationFilter, PatientProfileWhereInput>
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    availabilitySlot?: XOR<AvailabilitySlotScalarRelationFilter, AvailabilitySlotWhereInput>
  }, "id" | "availabilitySlotId">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientProfileId?: SortOrder
    doctorId?: SortOrder
    availabilitySlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    patientProfileId?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    availabilitySlotId?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumStatusWithAggregatesFilter<"Appointment"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type AvailabilitySlotWhereInput = {
    AND?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    OR?: AvailabilitySlotWhereInput[]
    NOT?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    id?: StringFilter<"AvailabilitySlot"> | string
    doctorId?: StringFilter<"AvailabilitySlot"> | string
    startTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    endTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    isBooked?: BoolFilter<"AvailabilitySlot"> | boolean
    createdAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
  }

  export type AvailabilitySlotOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctor?: DoctorProfileOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type AvailabilitySlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    OR?: AvailabilitySlotWhereInput[]
    NOT?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    doctorId?: StringFilter<"AvailabilitySlot"> | string
    startTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    endTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    isBooked?: BoolFilter<"AvailabilitySlot"> | boolean
    createdAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
  }, "id">

  export type AvailabilitySlotOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilitySlotCountOrderByAggregateInput
    _max?: AvailabilitySlotMaxOrderByAggregateInput
    _min?: AvailabilitySlotMinOrderByAggregateInput
  }

  export type AvailabilitySlotScalarWhereWithAggregatesInput = {
    AND?: AvailabilitySlotScalarWhereWithAggregatesInput | AvailabilitySlotScalarWhereWithAggregatesInput[]
    OR?: AvailabilitySlotScalarWhereWithAggregatesInput[]
    NOT?: AvailabilitySlotScalarWhereWithAggregatesInput | AvailabilitySlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilitySlot"> | string
    doctorId?: StringWithAggregatesFilter<"AvailabilitySlot"> | string
    startTime?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
    isBooked?: BoolWithAggregatesFilter<"AvailabilitySlot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
  }

  export type DoctorProfileWhereInput = {
    AND?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    OR?: DoctorProfileWhereInput[]
    NOT?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    id?: StringFilter<"DoctorProfile"> | string
    userId?: StringFilter<"DoctorProfile"> | string
    specialty?: StringFilter<"DoctorProfile"> | string
    licenseNo?: StringFilter<"DoctorProfile"> | string
    bio?: StringNullableFilter<"DoctorProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    availabilitySlots?: AvailabilitySlotListRelationFilter
  }

  export type DoctorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNo?: SortOrder
    bio?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    availabilitySlots?: AvailabilitySlotOrderByRelationAggregateInput
  }

  export type DoctorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    licenseNo?: string
    AND?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    OR?: DoctorProfileWhereInput[]
    NOT?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    specialty?: StringFilter<"DoctorProfile"> | string
    bio?: StringNullableFilter<"DoctorProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    availabilitySlots?: AvailabilitySlotListRelationFilter
  }, "id" | "userId" | "licenseNo">

  export type DoctorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNo?: SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: DoctorProfileCountOrderByAggregateInput
    _max?: DoctorProfileMaxOrderByAggregateInput
    _min?: DoctorProfileMinOrderByAggregateInput
  }

  export type DoctorProfileScalarWhereWithAggregatesInput = {
    AND?: DoctorProfileScalarWhereWithAggregatesInput | DoctorProfileScalarWhereWithAggregatesInput[]
    OR?: DoctorProfileScalarWhereWithAggregatesInput[]
    NOT?: DoctorProfileScalarWhereWithAggregatesInput | DoctorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorProfile"> | string
    userId?: StringWithAggregatesFilter<"DoctorProfile"> | string
    specialty?: StringWithAggregatesFilter<"DoctorProfile"> | string
    licenseNo?: StringWithAggregatesFilter<"DoctorProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"DoctorProfile"> | string | null
  }

  export type PatientProfileWhereInput = {
    AND?: PatientProfileWhereInput | PatientProfileWhereInput[]
    OR?: PatientProfileWhereInput[]
    NOT?: PatientProfileWhereInput | PatientProfileWhereInput[]
    id?: StringFilter<"PatientProfile"> | string
    userId?: StringFilter<"PatientProfile"> | string
    dateOfBirth?: DateTimeNullableFilter<"PatientProfile"> | Date | string | null
    nationalId?: StringFilter<"PatientProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
  }

  export type PatientProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationalId?: SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type PatientProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    nationalId?: string
    AND?: PatientProfileWhereInput | PatientProfileWhereInput[]
    OR?: PatientProfileWhereInput[]
    NOT?: PatientProfileWhereInput | PatientProfileWhereInput[]
    dateOfBirth?: DateTimeNullableFilter<"PatientProfile"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
  }, "id" | "userId" | "nationalId">

  export type PatientProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationalId?: SortOrder
    _count?: PatientProfileCountOrderByAggregateInput
    _max?: PatientProfileMaxOrderByAggregateInput
    _min?: PatientProfileMinOrderByAggregateInput
  }

  export type PatientProfileScalarWhereWithAggregatesInput = {
    AND?: PatientProfileScalarWhereWithAggregatesInput | PatientProfileScalarWhereWithAggregatesInput[]
    OR?: PatientProfileScalarWhereWithAggregatesInput[]
    NOT?: PatientProfileScalarWhereWithAggregatesInput | PatientProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientProfile"> | string
    userId?: StringWithAggregatesFilter<"PatientProfile"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"PatientProfile"> | Date | string | null
    nationalId?: StringWithAggregatesFilter<"PatientProfile"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    doctorProfile?: XOR<DoctorProfileNullableScalarRelationFilter, DoctorProfileWhereInput> | null
    patientProfile?: XOR<PatientProfileNullableScalarRelationFilter, PatientProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorProfile?: DoctorProfileOrderByWithRelationInput
    patientProfile?: PatientProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    doctorProfile?: XOR<DoctorProfileNullableScalarRelationFilter, DoctorProfileWhereInput> | null
    patientProfile?: XOR<PatientProfileNullableScalarRelationFilter, PatientProfileWhereInput> | null
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile: PatientProfileCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorProfileCreateNestedOneWithoutAppointmentsInput
    availabilitySlot: AvailabilitySlotCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    patientProfileId: string
    doctorId: string
    availabilitySlotId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    availabilitySlot?: AvailabilitySlotUpdateOneRequiredWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientProfileId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    patientProfileId: string
    doctorId: string
    availabilitySlotId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientProfileId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySlotCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorProfileCreateNestedOneWithoutAvailabilitySlotsInput
    appointment?: AppointmentCreateNestedOneWithoutAvailabilitySlotInput
  }

  export type AvailabilitySlotUncheckedCreateInput = {
    id?: string
    doctorId: string
    startTime: Date | string
    endTime: Date | string
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedOneWithoutAvailabilitySlotInput
  }

  export type AvailabilitySlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutAvailabilitySlotsNestedInput
    appointment?: AppointmentUpdateOneWithoutAvailabilitySlotNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateOneWithoutAvailabilitySlotNestedInput
  }

  export type AvailabilitySlotCreateManyInput = {
    id?: string
    doctorId: string
    startTime: Date | string
    endTime: Date | string
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilitySlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorProfileCreateInput = {
    id?: string
    specialty: string
    licenseNo: string
    bio?: string | null
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    availabilitySlots?: AvailabilitySlotCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    specialty: string
    licenseNo: string
    bio?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    availabilitySlots?: AvailabilitySlotUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    availabilitySlots?: AvailabilitySlotUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    availabilitySlots?: AvailabilitySlotUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileCreateManyInput = {
    id?: string
    userId: string
    specialty: string
    licenseNo: string
    bio?: string | null
  }

  export type DoctorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientProfileCreateInput = {
    id?: string
    dateOfBirth?: Date | string | null
    nationalId: string
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientProfileInput
  }

  export type PatientProfileUncheckedCreateInput = {
    id?: string
    userId: string
    dateOfBirth?: Date | string | null
    nationalId: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput
  }

  export type PatientProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientProfileNestedInput
  }

  export type PatientProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput
  }

  export type PatientProfileCreateManyInput = {
    id?: string
    userId: string
    dateOfBirth?: Date | string | null
    nationalId: string
  }

  export type PatientProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type PatientProfileScalarRelationFilter = {
    is?: PatientProfileWhereInput
    isNot?: PatientProfileWhereInput
  }

  export type DoctorProfileScalarRelationFilter = {
    is?: DoctorProfileWhereInput
    isNot?: DoctorProfileWhereInput
  }

  export type AvailabilitySlotScalarRelationFilter = {
    is?: AvailabilitySlotWhereInput
    isNot?: AvailabilitySlotWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientProfileId?: SortOrder
    doctorId?: SortOrder
    availabilitySlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientProfileId?: SortOrder
    doctorId?: SortOrder
    availabilitySlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientProfileId?: SortOrder
    doctorId?: SortOrder
    availabilitySlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type AvailabilitySlotCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilitySlotMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilitySlotMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isBooked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type AvailabilitySlotListRelationFilter = {
    every?: AvailabilitySlotWhereInput
    some?: AvailabilitySlotWhereInput
    none?: AvailabilitySlotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilitySlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNo?: SortOrder
    bio?: SortOrder
  }

  export type DoctorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNo?: SortOrder
    bio?: SortOrder
  }

  export type DoctorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNo?: SortOrder
    bio?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PatientProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    nationalId?: SortOrder
  }

  export type PatientProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    nationalId?: SortOrder
  }

  export type PatientProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    nationalId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DoctorProfileNullableScalarRelationFilter = {
    is?: DoctorProfileWhereInput | null
    isNot?: DoctorProfileWhereInput | null
  }

  export type PatientProfileNullableScalarRelationFilter = {
    is?: PatientProfileWhereInput | null
    isNot?: PatientProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type PatientProfileCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientProfileCreateWithoutAppointmentsInput, PatientProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutAppointmentsInput
    connect?: PatientProfileWhereUniqueInput
  }

  export type DoctorProfileCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorProfileCreateWithoutAppointmentsInput, DoctorProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type AvailabilitySlotCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<AvailabilitySlotCreateWithoutAppointmentInput, AvailabilitySlotUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutAppointmentInput
    connect?: AvailabilitySlotWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PatientProfileUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientProfileCreateWithoutAppointmentsInput, PatientProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientProfileUpsertWithoutAppointmentsInput
    connect?: PatientProfileWhereUniqueInput
    update?: XOR<XOR<PatientProfileUpdateToOneWithWhereWithoutAppointmentsInput, PatientProfileUpdateWithoutAppointmentsInput>, PatientProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutAppointmentsInput, DoctorProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorProfileUpsertWithoutAppointmentsInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutAppointmentsInput, DoctorProfileUpdateWithoutAppointmentsInput>, DoctorProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AvailabilitySlotUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutAppointmentInput, AvailabilitySlotUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutAppointmentInput
    upsert?: AvailabilitySlotUpsertWithoutAppointmentInput
    connect?: AvailabilitySlotWhereUniqueInput
    update?: XOR<XOR<AvailabilitySlotUpdateToOneWithWhereWithoutAppointmentInput, AvailabilitySlotUpdateWithoutAppointmentInput>, AvailabilitySlotUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorProfileCreateNestedOneWithoutAvailabilitySlotsInput = {
    create?: XOR<DoctorProfileCreateWithoutAvailabilitySlotsInput, DoctorProfileUncheckedCreateWithoutAvailabilitySlotsInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAvailabilitySlotsInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutAvailabilitySlotInput = {
    create?: XOR<AppointmentCreateWithoutAvailabilitySlotInput, AppointmentUncheckedCreateWithoutAvailabilitySlotInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutAvailabilitySlotInput
    connect?: AppointmentWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedOneWithoutAvailabilitySlotInput = {
    create?: XOR<AppointmentCreateWithoutAvailabilitySlotInput, AppointmentUncheckedCreateWithoutAvailabilitySlotInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutAvailabilitySlotInput
    connect?: AppointmentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DoctorProfileUpdateOneRequiredWithoutAvailabilitySlotsNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutAvailabilitySlotsInput, DoctorProfileUncheckedCreateWithoutAvailabilitySlotsInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAvailabilitySlotsInput
    upsert?: DoctorProfileUpsertWithoutAvailabilitySlotsInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutAvailabilitySlotsInput, DoctorProfileUpdateWithoutAvailabilitySlotsInput>, DoctorProfileUncheckedUpdateWithoutAvailabilitySlotsInput>
  }

  export type AppointmentUpdateOneWithoutAvailabilitySlotNestedInput = {
    create?: XOR<AppointmentCreateWithoutAvailabilitySlotInput, AppointmentUncheckedCreateWithoutAvailabilitySlotInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutAvailabilitySlotInput
    upsert?: AppointmentUpsertWithoutAvailabilitySlotInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutAvailabilitySlotInput, AppointmentUpdateWithoutAvailabilitySlotInput>, AppointmentUncheckedUpdateWithoutAvailabilitySlotInput>
  }

  export type AppointmentUncheckedUpdateOneWithoutAvailabilitySlotNestedInput = {
    create?: XOR<AppointmentCreateWithoutAvailabilitySlotInput, AppointmentUncheckedCreateWithoutAvailabilitySlotInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutAvailabilitySlotInput
    upsert?: AppointmentUpsertWithoutAvailabilitySlotInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutAvailabilitySlotInput, AppointmentUpdateWithoutAvailabilitySlotInput>, AppointmentUncheckedUpdateWithoutAvailabilitySlotInput>
  }

  export type UserCreateNestedOneWithoutDoctorProfileInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AvailabilitySlotCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AvailabilitySlotCreateWithoutDoctorInput, AvailabilitySlotUncheckedCreateWithoutDoctorInput> | AvailabilitySlotCreateWithoutDoctorInput[] | AvailabilitySlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutDoctorInput | AvailabilitySlotCreateOrConnectWithoutDoctorInput[]
    createMany?: AvailabilitySlotCreateManyDoctorInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AvailabilitySlotUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AvailabilitySlotCreateWithoutDoctorInput, AvailabilitySlotUncheckedCreateWithoutDoctorInput> | AvailabilitySlotCreateWithoutDoctorInput[] | AvailabilitySlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutDoctorInput | AvailabilitySlotCreateOrConnectWithoutDoctorInput[]
    createMany?: AvailabilitySlotCreateManyDoctorInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutDoctorProfileNestedInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    upsert?: UserUpsertWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorProfileInput, UserUpdateWithoutDoctorProfileInput>, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AvailabilitySlotUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutDoctorInput, AvailabilitySlotUncheckedCreateWithoutDoctorInput> | AvailabilitySlotCreateWithoutDoctorInput[] | AvailabilitySlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutDoctorInput | AvailabilitySlotCreateOrConnectWithoutDoctorInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput | AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AvailabilitySlotCreateManyDoctorInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput | AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput | AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutDoctorInput, AvailabilitySlotUncheckedCreateWithoutDoctorInput> | AvailabilitySlotCreateWithoutDoctorInput[] | AvailabilitySlotUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutDoctorInput | AvailabilitySlotCreateOrConnectWithoutDoctorInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput | AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AvailabilitySlotCreateManyDoctorInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput | AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput | AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientProfileInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutPatientProfileInput = {
    create?: XOR<AppointmentCreateWithoutPatientProfileInput, AppointmentUncheckedCreateWithoutPatientProfileInput> | AppointmentCreateWithoutPatientProfileInput[] | AppointmentUncheckedCreateWithoutPatientProfileInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientProfileInput | AppointmentCreateOrConnectWithoutPatientProfileInput[]
    createMany?: AppointmentCreateManyPatientProfileInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput = {
    create?: XOR<AppointmentCreateWithoutPatientProfileInput, AppointmentUncheckedCreateWithoutPatientProfileInput> | AppointmentCreateWithoutPatientProfileInput[] | AppointmentUncheckedCreateWithoutPatientProfileInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientProfileInput | AppointmentCreateOrConnectWithoutPatientProfileInput[]
    createMany?: AppointmentCreateManyPatientProfileInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPatientProfileNestedInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    upsert?: UserUpsertWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientProfileInput, UserUpdateWithoutPatientProfileInput>, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type AppointmentUpdateManyWithoutPatientProfileNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientProfileInput, AppointmentUncheckedCreateWithoutPatientProfileInput> | AppointmentCreateWithoutPatientProfileInput[] | AppointmentUncheckedCreateWithoutPatientProfileInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientProfileInput | AppointmentCreateOrConnectWithoutPatientProfileInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput | AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput[]
    createMany?: AppointmentCreateManyPatientProfileInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput | AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientProfileInput | AppointmentUpdateManyWithWhereWithoutPatientProfileInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientProfileInput, AppointmentUncheckedCreateWithoutPatientProfileInput> | AppointmentCreateWithoutPatientProfileInput[] | AppointmentUncheckedCreateWithoutPatientProfileInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientProfileInput | AppointmentCreateOrConnectWithoutPatientProfileInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput | AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput[]
    createMany?: AppointmentCreateManyPatientProfileInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput | AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientProfileInput | AppointmentUpdateManyWithWhereWithoutPatientProfileInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type PatientProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput
    connect?: PatientProfileWhereUniqueInput
  }

  export type DoctorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type PatientProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput
    connect?: PatientProfileWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DoctorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    upsert?: DoctorProfileUpsertWithoutUserInput
    disconnect?: DoctorProfileWhereInput | boolean
    delete?: DoctorProfileWhereInput | boolean
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutUserInput, DoctorProfileUpdateWithoutUserInput>, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type PatientProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput
    upsert?: PatientProfileUpsertWithoutUserInput
    disconnect?: PatientProfileWhereInput | boolean
    delete?: PatientProfileWhereInput | boolean
    connect?: PatientProfileWhereUniqueInput
    update?: XOR<XOR<PatientProfileUpdateToOneWithWhereWithoutUserInput, PatientProfileUpdateWithoutUserInput>, PatientProfileUncheckedUpdateWithoutUserInput>
  }

  export type DoctorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    upsert?: DoctorProfileUpsertWithoutUserInput
    disconnect?: DoctorProfileWhereInput | boolean
    delete?: DoctorProfileWhereInput | boolean
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutUserInput, DoctorProfileUpdateWithoutUserInput>, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type PatientProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput
    upsert?: PatientProfileUpsertWithoutUserInput
    disconnect?: PatientProfileWhereInput | boolean
    delete?: PatientProfileWhereInput | boolean
    connect?: PatientProfileWhereUniqueInput
    update?: XOR<XOR<PatientProfileUpdateToOneWithWhereWithoutUserInput, PatientProfileUpdateWithoutUserInput>, PatientProfileUncheckedUpdateWithoutUserInput>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type PatientProfileCreateWithoutAppointmentsInput = {
    id?: string
    dateOfBirth?: Date | string | null
    nationalId: string
    user: UserCreateNestedOneWithoutPatientProfileInput
  }

  export type PatientProfileUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    dateOfBirth?: Date | string | null
    nationalId: string
  }

  export type PatientProfileCreateOrConnectWithoutAppointmentsInput = {
    where: PatientProfileWhereUniqueInput
    create: XOR<PatientProfileCreateWithoutAppointmentsInput, PatientProfileUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorProfileCreateWithoutAppointmentsInput = {
    id?: string
    specialty: string
    licenseNo: string
    bio?: string | null
    user: UserCreateNestedOneWithoutDoctorProfileInput
    availabilitySlots?: AvailabilitySlotCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    specialty: string
    licenseNo: string
    bio?: string | null
    availabilitySlots?: AvailabilitySlotUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutAppointmentsInput, DoctorProfileUncheckedCreateWithoutAppointmentsInput>
  }

  export type AvailabilitySlotCreateWithoutAppointmentInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorProfileCreateNestedOneWithoutAvailabilitySlotsInput
  }

  export type AvailabilitySlotUncheckedCreateWithoutAppointmentInput = {
    id?: string
    doctorId: string
    startTime: Date | string
    endTime: Date | string
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilitySlotCreateOrConnectWithoutAppointmentInput = {
    where: AvailabilitySlotWhereUniqueInput
    create: XOR<AvailabilitySlotCreateWithoutAppointmentInput, AvailabilitySlotUncheckedCreateWithoutAppointmentInput>
  }

  export type PatientProfileUpsertWithoutAppointmentsInput = {
    update: XOR<PatientProfileUpdateWithoutAppointmentsInput, PatientProfileUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientProfileCreateWithoutAppointmentsInput, PatientProfileUncheckedCreateWithoutAppointmentsInput>
    where?: PatientProfileWhereInput
  }

  export type PatientProfileUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientProfileWhereInput
    data: XOR<PatientProfileUpdateWithoutAppointmentsInput, PatientProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientProfileUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
  }

  export type PatientProfileUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorProfileUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorProfileUpdateWithoutAppointmentsInput, DoctorProfileUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorProfileCreateWithoutAppointmentsInput, DoctorProfileUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutAppointmentsInput, DoctorProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorProfileUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    availabilitySlots?: AvailabilitySlotUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySlots?: AvailabilitySlotUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AvailabilitySlotUpsertWithoutAppointmentInput = {
    update: XOR<AvailabilitySlotUpdateWithoutAppointmentInput, AvailabilitySlotUncheckedUpdateWithoutAppointmentInput>
    create: XOR<AvailabilitySlotCreateWithoutAppointmentInput, AvailabilitySlotUncheckedCreateWithoutAppointmentInput>
    where?: AvailabilitySlotWhereInput
  }

  export type AvailabilitySlotUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: AvailabilitySlotWhereInput
    data: XOR<AvailabilitySlotUpdateWithoutAppointmentInput, AvailabilitySlotUncheckedUpdateWithoutAppointmentInput>
  }

  export type AvailabilitySlotUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutAvailabilitySlotsNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorProfileCreateWithoutAvailabilitySlotsInput = {
    id?: string
    specialty: string
    licenseNo: string
    bio?: string | null
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateWithoutAvailabilitySlotsInput = {
    id?: string
    userId: string
    specialty: string
    licenseNo: string
    bio?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileCreateOrConnectWithoutAvailabilitySlotsInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutAvailabilitySlotsInput, DoctorProfileUncheckedCreateWithoutAvailabilitySlotsInput>
  }

  export type AppointmentCreateWithoutAvailabilitySlotInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile: PatientProfileCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorProfileCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutAvailabilitySlotInput = {
    id?: string
    patientProfileId: string
    doctorId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutAvailabilitySlotInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutAvailabilitySlotInput, AppointmentUncheckedCreateWithoutAvailabilitySlotInput>
  }

  export type DoctorProfileUpsertWithoutAvailabilitySlotsInput = {
    update: XOR<DoctorProfileUpdateWithoutAvailabilitySlotsInput, DoctorProfileUncheckedUpdateWithoutAvailabilitySlotsInput>
    create: XOR<DoctorProfileCreateWithoutAvailabilitySlotsInput, DoctorProfileUncheckedCreateWithoutAvailabilitySlotsInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutAvailabilitySlotsInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutAvailabilitySlotsInput, DoctorProfileUncheckedUpdateWithoutAvailabilitySlotsInput>
  }

  export type DoctorProfileUpdateWithoutAvailabilitySlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutAvailabilitySlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AppointmentUpsertWithoutAvailabilitySlotInput = {
    update: XOR<AppointmentUpdateWithoutAvailabilitySlotInput, AppointmentUncheckedUpdateWithoutAvailabilitySlotInput>
    create: XOR<AppointmentCreateWithoutAvailabilitySlotInput, AppointmentUncheckedCreateWithoutAvailabilitySlotInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutAvailabilitySlotInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutAvailabilitySlotInput, AppointmentUncheckedUpdateWithoutAvailabilitySlotInput>
  }

  export type AppointmentUpdateWithoutAvailabilitySlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutAvailabilitySlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientProfileId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDoctorProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile: PatientProfileCreateNestedOneWithoutAppointmentsInput
    availabilitySlot: AvailabilitySlotCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientProfileId: string
    availabilitySlotId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilitySlotCreateWithoutDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutAvailabilitySlotInput
  }

  export type AvailabilitySlotUncheckedCreateWithoutDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedOneWithoutAvailabilitySlotInput
  }

  export type AvailabilitySlotCreateOrConnectWithoutDoctorInput = {
    where: AvailabilitySlotWhereUniqueInput
    create: XOR<AvailabilitySlotCreateWithoutDoctorInput, AvailabilitySlotUncheckedCreateWithoutDoctorInput>
  }

  export type AvailabilitySlotCreateManyDoctorInputEnvelope = {
    data: AvailabilitySlotCreateManyDoctorInput | AvailabilitySlotCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorProfileInput = {
    update: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type UserUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientProfileId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    availabilitySlotId?: StringFilter<"Appointment"> | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AvailabilitySlotWhereUniqueInput
    update: XOR<AvailabilitySlotUpdateWithoutDoctorInput, AvailabilitySlotUncheckedUpdateWithoutDoctorInput>
    create: XOR<AvailabilitySlotCreateWithoutDoctorInput, AvailabilitySlotUncheckedCreateWithoutDoctorInput>
  }

  export type AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AvailabilitySlotWhereUniqueInput
    data: XOR<AvailabilitySlotUpdateWithoutDoctorInput, AvailabilitySlotUncheckedUpdateWithoutDoctorInput>
  }

  export type AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput = {
    where: AvailabilitySlotScalarWhereInput
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AvailabilitySlotScalarWhereInput = {
    AND?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
    OR?: AvailabilitySlotScalarWhereInput[]
    NOT?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
    id?: StringFilter<"AvailabilitySlot"> | string
    doctorId?: StringFilter<"AvailabilitySlot"> | string
    startTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    endTime?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    isBooked?: BoolFilter<"AvailabilitySlot"> | boolean
    createdAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    updatedAt?: DateTimeFilter<"AvailabilitySlot"> | Date | string
  }

  export type UserCreateWithoutPatientProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
  }

  export type AppointmentCreateWithoutPatientProfileInput = {
    id?: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorProfileCreateNestedOneWithoutAppointmentsInput
    availabilitySlot: AvailabilitySlotCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPatientProfileInput = {
    id?: string
    doctorId: string
    availabilitySlotId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutPatientProfileInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientProfileInput, AppointmentUncheckedCreateWithoutPatientProfileInput>
  }

  export type AppointmentCreateManyPatientProfileInputEnvelope = {
    data: AppointmentCreateManyPatientProfileInput | AppointmentCreateManyPatientProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientProfileInput = {
    update: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type UserUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientProfileInput, AppointmentUncheckedUpdateWithoutPatientProfileInput>
    create: XOR<AppointmentCreateWithoutPatientProfileInput, AppointmentUncheckedCreateWithoutPatientProfileInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientProfileInput, AppointmentUncheckedUpdateWithoutPatientProfileInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientProfileInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientProfileInput>
  }

  export type DoctorProfileCreateWithoutUserInput = {
    id?: string
    specialty: string
    licenseNo: string
    bio?: string | null
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    availabilitySlots?: AvailabilitySlotCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    specialty: string
    licenseNo: string
    bio?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    availabilitySlots?: AvailabilitySlotUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileCreateOrConnectWithoutUserInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
  }

  export type PatientProfileCreateWithoutUserInput = {
    id?: string
    dateOfBirth?: Date | string | null
    nationalId: string
    appointments?: AppointmentCreateNestedManyWithoutPatientProfileInput
  }

  export type PatientProfileUncheckedCreateWithoutUserInput = {
    id?: string
    dateOfBirth?: Date | string | null
    nationalId: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput
  }

  export type PatientProfileCreateOrConnectWithoutUserInput = {
    where: PatientProfileWhereUniqueInput
    create: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
  }

  export type DoctorProfileUpsertWithoutUserInput = {
    update: XOR<DoctorProfileUpdateWithoutUserInput, DoctorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutUserInput, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type DoctorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    availabilitySlots?: AvailabilitySlotUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNo?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    availabilitySlots?: AvailabilitySlotUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientProfileUpsertWithoutUserInput = {
    update: XOR<PatientProfileUpdateWithoutUserInput, PatientProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PatientProfileCreateWithoutUserInput, PatientProfileUncheckedCreateWithoutUserInput>
    where?: PatientProfileWhereInput
  }

  export type PatientProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientProfileWhereInput
    data: XOR<PatientProfileUpdateWithoutUserInput, PatientProfileUncheckedUpdateWithoutUserInput>
  }

  export type PatientProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutPatientProfileNestedInput
  }

  export type PatientProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalId?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    patientProfileId: string
    availabilitySlotId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilitySlotCreateManyDoctorInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    isBooked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    availabilitySlot?: AvailabilitySlotUpdateOneRequiredWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientProfileId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySlotUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutAvailabilitySlotNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateOneWithoutAvailabilitySlotNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyPatientProfileInput = {
    id?: string
    doctorId: string
    availabilitySlotId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    availabilitySlot?: AvailabilitySlotUpdateOneRequiredWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    availabilitySlotId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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