import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfService {
  async generatePdf(template: string, css: string): Promise<Buffer> {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
    const page = await browser.newPage();

    // Menggabungkan HTML dan CSS
    const htmlContent = `
      <html>
        <head>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${template}
        </body>
      </html>
    `;

    try {
      await page.goto(`data:text/html,${htmlContent}`, { waitUntil: 'networkidle0', timeout: 30000 }); // Timeout set to 30 seconds
      const pdfBuffer = await page.pdf({ format: 'A4' });
      return pdfBuffer;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error; // Re-throw error to be handled by the caller
    } finally {
      await browser.close();
    }
  }
}
