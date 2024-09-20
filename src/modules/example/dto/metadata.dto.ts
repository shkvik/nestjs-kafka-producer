import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class MetadataDto {
  
  @ApiProperty({ 
    type: Array<string>(),
    default: ['example.topic']
  })
  @IsArray()
  @IsString({ each: true })
  topics: string[]
}