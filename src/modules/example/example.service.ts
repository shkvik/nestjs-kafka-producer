import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ExampleService {

  private readonly logger = new Logger(ExampleService.name);
  
  constructor(
    @Inject('EXAMPLE_SERVICE')
    private readonly exampleClient: ClientKafka
  ){}
  
  //Внедрить отдельно варианты отправки формата.
  async onModuleInit() {
    //this.exampleClient.subscribeToResponseOf('example.topic');
    
    await this.exampleClient.connect();
    const admin = await this.exampleClient['client'].admin();
    await admin.connect();
    // Получаем метаданные для указанного топика
    const metadata = await admin.fetchTopicMetadata({ topics: ['example.topic'] });
    this.logger.debug(metadata)
  }
  
  public async getHello(): Promise<string> {
    const test = await lastValueFrom(
      this.exampleClient.emit('example.topic', { message: "HELLO WORLD" })
    ) ;
    return JSON.stringify(test)
  }
}
