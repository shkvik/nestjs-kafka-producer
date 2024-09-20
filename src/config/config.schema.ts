import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ConfigSchema {
  
  @IsString()
  @IsNotEmpty()
  NODE_ENV: string;
  
  @IsNumber()
  @IsNotEmpty()
  PORT: number;
  
  @IsString()
  @IsNotEmpty()
  ADDRESS: string;

  @IsString()
  @IsNotEmpty()
  KAFKA_SERVICE_NAME: string

  @IsString()
  @IsNotEmpty()
  KAFKA_CLIENT_ID: string

  @IsString()
  @IsNotEmpty()
  KAFKA_ADDRESS: string;

  @IsString()
  @IsNotEmpty()
  SWAGGER_PATH: string;
}