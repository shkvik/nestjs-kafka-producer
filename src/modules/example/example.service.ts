import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { KafkaService } from '../kafka/kafka.service';
import { CONFIG_KAFKA } from 'src/config/config.export';
import { MetadataDto } from './dto';

@Injectable()
export class ExampleService {
  private readonly logger = new Logger(ExampleService.name);

  constructor(
    @Inject(CONFIG_KAFKA.KAFKA_SERVICE_NAME)
    private readonly exampleClient: ClientKafka,
    private readonly kafkaService: KafkaService
  ){}

  public async getMetadata(dto: MetadataDto){
    const { topics } = dto;
    const meta = await this.kafkaService.fetchTopicMetadata();
    return JSON.stringify(meta, null, 2);
  }

  public async getHello(): Promise<string> {
    const test = await lastValueFrom(
      this.exampleClient.emit('example.topic', { message: "HELLO WORLD" })
    ) ;
    return JSON.stringify(test)
  }

  public async emitBroadcast(): Promise<string> {
    const test = await lastValueFrom(
      this.exampleClient.emit('broadcast.topic', { message: "HELLO WORLD" })
    ) ;
    return JSON.stringify(test)
  }
}
