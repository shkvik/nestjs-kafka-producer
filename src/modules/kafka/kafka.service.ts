import { Injectable, OnApplicationShutdown, OnModuleInit } from "@nestjs/common";
import { Kafka, Producer, ProducerRecord, RecordMetadata } from "kafkajs";

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
  
  private readonly kafka: Kafka;
  private readonly producer: Producer;

  constructor() {
    this.kafka = new Kafka({
      brokers: ['localhost:9092'],
    });
    this.producer = this.kafka.producer();
  }

  public async onModuleInit(): Promise<void> {
    await this.producer.connect();
  }
    
  public async onApplicationShutdown(signal?: string): Promise<void> {
    await this.producer.disconnect();
  }

  public async produce(record: ProducerRecord): Promise<RecordMetadata[]> {
    return this.producer.send(record);
  }
}