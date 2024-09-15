import { Injectable } from '@nestjs/common';
import { ProducerService } from '../kafka/kafka.service';

@Injectable()
export class ExampleService {
  
  constructor(
    private readonly producerSertvice: ProducerService
  ){}
  
  public async getHello(): Promise<string> {
    const res = await this.producerSertvice.produce({
      topic: 'test',
      messages: [{ value: 'Test message' }]
    })
    return JSON.stringify(res);
  }
}
