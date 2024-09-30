import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ApiTags } from '@nestjs/swagger';
import { 
  BroadcastDto, 
  LimitDto, 
  MetadataDto, 
  QueueDto
} from './dto';

@Controller()
@ApiTags('Activities')
export class ExampleController {
  
  constructor(private readonly exampleService: ExampleService) {}

  @Get('metadata')
  public async getMetadata(@Query() dto: MetadataDto): Promise<string> {
    return this.exampleService.getMetadata(dto);
  }
  
  @Post('broadcast')
  public async postBroadcast(@Body() dto: BroadcastDto): Promise<string> {
    return this.exampleService.postBroadcast(dto);
  }

  @Post('queue')
  public async postQueue(@Body() dto: QueueDto): Promise<string> {
    return this.exampleService.postQueue(dto);
  }

  @Post('limit')
  public async postLimit(@Body() dto: LimitDto): Promise<string>{
    return this.exampleService.postLimit(dto);
  }
}
