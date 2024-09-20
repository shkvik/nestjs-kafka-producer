import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { KafkaService } from "./kafka.service";
import { CONFIG_KAFKA } from "src/config/config.export";

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: CONFIG_KAFKA.KAFKA_SERVICE_NAME,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: CONFIG_KAFKA.KAFKA_CLIENT_ID,
            brokers: [CONFIG_KAFKA.KAFKA_ADDRESS],
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
