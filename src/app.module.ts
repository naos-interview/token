import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contract } from './db/entities/contract.entity';
import { typeOrmAsyncConfig } from './db/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forFeature([Contract]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
