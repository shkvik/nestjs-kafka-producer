import { Module } from '@nestjs/common';
import { ProducerService } from './kafka.service';

@Module({
  providers: [ProducerService],
  exports: [ProducerService]
})
export class KafkaModule {}
