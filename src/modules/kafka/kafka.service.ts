import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Admin } from '@nestjs/microservices/external/kafka.interface';
import { CONFIG_KAFKA } from 'src/config/config.export';

@Injectable()
export class KafkaService {
  private kafkaAdmin: Admin;

  constructor(
    @Inject(CONFIG_KAFKA.KAFKA_SERVICE_NAME)
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
