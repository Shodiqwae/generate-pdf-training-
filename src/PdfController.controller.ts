import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller('pdf')
export class PdfController {
  @Get('download')
  downloadPdf(@Res() res: Response): void {
    const filePath = path.join(__dirname, '..', 'assets/JYPL (SG) Action Guide - Mabel Goh.pdf'); 

    res.download(filePath, 'assets/JYPL (SG) Action Guide - Mabel Goh.pdf', (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error downloading PDF gg');
      }
    });
  }
}
