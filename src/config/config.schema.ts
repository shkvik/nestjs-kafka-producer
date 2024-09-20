import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ConfigKafka {

  @IsString()
  KAFKA_SERVICE_NAME: string

  @IsString()
  KAFKA_CLIENT_ID: string

  @IsString()
  KAFKA_ADDRESS: string;

  @IsNumber()
  @IsNotEmpty()
  PORT1: number;
}

export class ConfigSwagger {

  @IsString()
  SWAGGER_PATH: string;

  @IsNumber()
  @IsNotEmpty()
  PORT2: number;
}

export class ConfigSchema {

  @IsString()
  NODE_ENV: string;

  @IsNumber()
  @IsNotEmpty()
  PORT1: number;
}

const configs = [
  ConfigKafka,
  ConfigSwagger,
  ConfigSchema,
]



type Constructor<T = {}> = new (...args: any[]) => T;

// Извлекает тип экземпляра из конструктора
type InstanceTypeExt<T> = T extends Constructor<infer I> ? I : never;

type TRATR<T> = {
  [K in keyof T]: T extends Constructor<infer I> ? I : never;
}

function combineClasse2s(classes: Constructor[]): Constructor<TRATR<T>> {
  const combineClassesHelper = (depth: number): Constructor => {
    if (depth < 0) {
      return class {};
    }
    const CurrentClass = classes[depth];
    const ParentClass = combineClassesHelper(depth - 1);
    return class CombinedClass extends ParentClass {
      constructor(...args: any[]) {
        super(...args);
        const currentInstance = new CurrentClass(...args);
        Object.assign(this, currentInstance);
      }
    };
  };
  const combinedClass = combineClassesHelper(classes.length - 1);
  Object.defineProperty(combinedClass, 'name', { value: 'CombinedClass' });

  return combinedClass as Constructor<TRATR<T>>;
}



// Преобразует объединение типов в пересечение
type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends 
  (k: infer I) => void ? I : never;

// Объединяет все типы экземпляров в одно пересечение
type CombinedInstance<T extends Constructor[]> = UnionToIntersection<InstanceTypeExt<T[number]>>;

type TestTypes = CombinedInstance<[
  typeof ConfigKafka,
  typeof ConfigSwagger,
  typeof ConfigSchema,
]>;

export const Test = combineClasse2s<ConfigKafka>([
  ConfigKafka,
  ConfigSwagger,
  ConfigSchema,
])