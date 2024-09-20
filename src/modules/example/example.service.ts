import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Admin } from '@nestjs/microservices/external/kafka.interface';
import { lastValueFrom } from 'rxjs';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class ExampleService {
  private readonly logger = new Logger(ExampleService.name);

  constructor(
    @Inject('EXAMPLE_SERVICE')
    private readonly exampleClient: ClientKafka,
    private readonly kafkaService: KafkaService
  ){}

  public async getMetadata(){
    const meta = await this.kafkaService.fetchTopicMetadata()
    return JSON.stringify(meta, null, 2);
  }

  public async getHello(): Promise<string> {
    const test = await lastValueFrom(
      this.exampleClient.emit('example.topic', { message: "HELLO WORLD" })
    ) ;
    return JSON.stringify(test)
  }
}
