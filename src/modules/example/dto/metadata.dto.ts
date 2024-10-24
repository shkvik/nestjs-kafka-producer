import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';

export class MetadataDto {
  
  @ApiProperty({ 
    type: () => [String],
    default: ['example.topic']
  })
  @Transform(({ value }) => { 
    return Array.isArray(value) ? value : [value];
  })
  @IsString({ each: true })
  topics: string[]
}