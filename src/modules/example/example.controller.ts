import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller()
export class ExampleController {
  constructor(private readonly appService: ExampleService) {}

  @Get()
  public async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
