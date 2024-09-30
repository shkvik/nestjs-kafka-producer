import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class QueueDto {
  
  @ApiProperty({ 
    type: String,
    default: 'One'
  })
  @IsString()
  key: string

  @ApiProperty({ 
    type: String,
    default: 'Hello World!'
  })
  @IsString()
  message: string
}