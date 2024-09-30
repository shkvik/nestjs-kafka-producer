import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LimitDto {
  
  @ApiProperty({ 
    type: String,
    default: 'Hello World!'
  })
  @IsString()
  message: string
}