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
  

  /**
   *  Сделать широковещательное сообщения для всех консюмеров из топика
   *  1. Способ — создать для каждого потребителя уникальную группу потребителей.
   * 
   *     Как работает:
   *     
   *     Каждый потребитель присоединяется к Kafka как отдельная группа с уникальным groupId.
   *     Поскольку группы не разделяют сообщения между потребителями, каждый из них получит сообщение независимо от других.
   *     Пример:
   *     
   *     Допустим, у вас есть три потребителя, каждый с уникальной группой:
   *     
   *     consumer-group-1
   *     consumer-group-2
   *     consumer-group-3
   *     Все они будут получать одно и то же сообщение от Kafka из всех партиций топика.
   */
  @Post('broadcast')
  public async postBroadcast(){

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
