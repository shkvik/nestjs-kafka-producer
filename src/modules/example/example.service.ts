import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { KafkaService } from '../kafka/kafka.service';
import { CONFIG_KAFKA } from 'src/config/config.export';
import { Message, RecordMetadata } from 'kafkajs';
import { 
  BroadcastDto, 
  LimitDto, 
  MetadataDto, 
  QueueDto
} from './dto';


@Injectable()
export class ExampleService {

  constructor(
    @Inject(CONFIG_KAFKA.KAFKA_SERVICE_NAME)
    private readonly exampleClient: ClientKafka,
    private readonly kafkaService: KafkaService
  ){}

  public async getMetadata(dto: MetadataDto): Promise<string> {
    const meta = await this.kafkaService
      .fetchTopicMetadata(dto.topics);
    
    return JSON.stringify(meta, null, 2);
  }

  public async postBroadcast(dto: BroadcastDto): Promise<string> {
    const test = await lastValueFrom(
      this.exampleClient.emit<RecordMetadata, Message>('broadcast.topic', { 
        value: dto.message
      })
    );
    return JSON.stringify(test, null, 2);
  }

  public async postQueue(dto: QueueDto): Promise<string> {
    const test = await lastValueFrom(
      this.exampleClient.emit<RecordMetadata, Message>('queue.topic', {
        key: dto.key,
        value: dto.message
      })
    );
    return JSON.stringify(test, null, 2);
  }

  public async postLimit(dto: LimitDto): Promise<string>{
    const test = await lastValueFrom(
      this.exampleClient.emit<RecordMetadata, Message>('limit.topic', {
        value: dto.message,
      })
    );
    return JSON.stringify(test, null, 2);
  }
}
