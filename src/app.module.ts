import { Module } from '@nestjs/common';
import { PdfController } from './PdfController.controller';

@Module({
  controllers: [PdfController],
})
export class AppModule {}
