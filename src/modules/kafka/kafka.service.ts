import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Admin } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class KafkaService {

  private readonly logger = new Logger(KafkaService.name);
  private kafkaAdmin: Admin;

  constructor(
    @Inject('EXAMPLE_SERVICE')
    private readonly clientKafka: ClientKafka
  ) { }

  async onModuleInit() {
    await this.clientKafka.connect();
    this.kafkaAdmin = this.clientKafka['client'].admin();
    await this.kafkaAdmin.connect();
  }

  public async fetchTopicMetadata(topics?: string[]) {
    return this.kafkaAdmin.fetchTopicMetadata({ topics });
  }
}
