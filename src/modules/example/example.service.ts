import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ExampleService {
  
  constructor(
    @Inject('EXAMPLE_SERVICE')
    private readonly exampleClient: ClientKafka
  ){}
  
  public async getHello(): Promise<string> {
    const test = await lastValueFrom(
      this.exampleClient.emit('example.topic', { message: "HELLO WORLD" })
    ) ;
    return JSON.stringify(test)
  }
}
