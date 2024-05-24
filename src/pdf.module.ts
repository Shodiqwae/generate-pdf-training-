import { Module } from '@nestjs/common';
import { PdfService } from './pdf/pdf.service';
import { PdfController } from './pdf/pdf.controller';

@Module({
  providers: [PdfService],
  controllers: [PdfController],
})
export class PdfModule {}
