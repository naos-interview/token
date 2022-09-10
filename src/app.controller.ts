import { Controller, Get, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface CreateTokenAddressRequest {
  tokenAddress: string;
}
interface ISumOfNumberArray {
  sum: number;
}
@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('TokenAdressService', 'createTokenAddress')
  createTokenAddress(
    req: CreateTokenAddressRequest,
    metadata: any,
  ): ISumOfNumberArray {
    this.logger.log(req);
    return { sum: 1 };
  }
}
