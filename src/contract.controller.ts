import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ContractService } from './contract.service';

interface CreateTokenAddressRequest {
  tokenAddress: string;
}

@Controller()
export class ContractCOntroller {
  private logger = new Logger('ContractCOntroller');
  constructor(private readonly contractService: ContractService) {}

  @GrpcMethod('ContractAddressService', 'createContractAddress')
  createTokenAddress(req: CreateTokenAddressRequest) {
    this.logger.log('create contractAddress:' + req.tokenAddress);
    this.contractService.createContractAddress(req.tokenAddress);
    return { success: true };
  }

  @GrpcMethod('ContractAddressService', 'getAllContractAddress')
  async getAllContractAddress() {
    const data = await this.contractService.getAllCOntractAddress();
    return {
      data,
    };
  }
}
