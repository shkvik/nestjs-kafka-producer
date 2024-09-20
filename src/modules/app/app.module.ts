import { Module } from '@nestjs/common';
import { ExampleModule } from '../example/example.module';
import { KafkaModule } from '../kafka/kafka.module';

@Module({
  imports: [
    KafkaModule,
    ExampleModule
  ],
})
export class AppModule { }
