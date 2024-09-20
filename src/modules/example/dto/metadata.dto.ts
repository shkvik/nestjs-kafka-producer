import { IsArray, IsString } from 'class-validator';

export class MetadataDto {
  
  @IsArray()
  @IsString({ each: true })
  topics: string[]
}