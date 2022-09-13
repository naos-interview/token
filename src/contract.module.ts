import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractCOntroller } from './contract.controller';
import { ContractService } from './contract.service';
import { Contract } from './db/entities/contract.entity';
import { typeOrmAsyncConfig } from './db/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([Contract]),
  ],
  controllers: [ContractCOntroller],
  providers: [ContractService],
})
export class ContractModule {}
