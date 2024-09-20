import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { KafkaService } from "./kafka.service";

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EXAMPLE_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'example-producer',
            brokers: ['localhost:9092'],
          },
          producerOnlyMode: true,
        },
      },
    ]),
  ],
  providers: [
    KafkaService
  ],
  exports: [
    ClientsModule,
    KafkaService
  ]
})
export class KafkaModule { }
