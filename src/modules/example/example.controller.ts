import { Controller, Get, Post, Query } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { MetadataDto } from './dto';

@Controller()
@ApiTags('Activities')
export class ExampleController {
  
  constructor(private readonly exampleService: ExampleService) {}

  @Get('metadata')
  public async getMetadata(@Query() dto: MetadataDto): Promise<string> {
    return this.exampleService.getMetadata(dto);
  }
  
  @Post('broadcast')
  public async emitBroadcast(){
    return this.exampleService.emitBroadcast();
  }

  @Post('hello')
  public async getHello(): Promise<string> {
    return this.exampleService.getHello();
  }

  @Post('queue-message')
  public async postQueueMessage (){
    // Сделать отпрвку по очереди
  }

  @Post('limit')
  public async postLimit (){
    // Сделать отпрвку на консюмер с лимитом используя ThrottlerModule в консюмере
  }
}
