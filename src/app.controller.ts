import { Controller, Get, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface CreateTokenAddressRequest {
  tokenAddress: string;
}

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('ContractAddressService', 'createContractAddress')
  createTokenAddress(req: CreateTokenAddressRequest, metadata: any) {
    this.logger.log('create contractAddress:' + req.tokenAddress);
    // this.appService.createContractAddress(req.tokenAddress);
    return { success: true };
  }
}
