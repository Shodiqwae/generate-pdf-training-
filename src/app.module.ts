import { Module } from '@nestjs/common';
import { PdfModule } from './pdf.module';

@Module({
  imports: [PdfModule],
})
export class AppModule {}
