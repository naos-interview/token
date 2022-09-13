import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { ContractModule } from './contract.module';
import { Transport } from '@nestjs/microservices';

const microServiceOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50053',
    package: 'contract',
    protoPath: join(__dirname, '../src//protos/contract.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    ContractModule,
    microServiceOptions,
  );
  await app.listen();
}
bootstrap();
