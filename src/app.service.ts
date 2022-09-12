import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from './db/entities/contract.entity';

@Injectable()
export class AppService {
  private logger = new Logger('AppService');

  constructor(
    @InjectRepository(Contract)
    private contractRepo: Repository<Contract>,
  ) {}

  async createContractAddress(address: string) {
    const newContract = this.contractRepo.create({
      address,
    });
    await this.contractRepo.save(newContract);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
