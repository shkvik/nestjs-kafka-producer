import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

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
  exports: [
    ClientsModule
  ]
})
export class KafkaModule {}
