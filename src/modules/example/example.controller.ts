import { Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ApiTags } from '@nestjs/swagger';
import { MetadataDto } from './dto';

@Controller()
@ApiTags('Activities')
export class ExampleController {
  
  constructor(private readonly exampleService: ExampleService) {}

  @Get('metadata')
  public async getMetadata(dto: MetadataDto)  {
    return this.exampleService.getMetadata();
  }
  
  @Post('broadcast')
  public async postBroadcast(){
    // Сделать широковещательное сообщения для всех консюмеров из топика
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
