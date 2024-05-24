import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Membuat folder assets jika belum ada
  const assetsFolder = path.join(__dirname, '..', 'assets');
  if (!fs.existsSync(assetsFolder)) {
    fs.mkdirSync(assetsFolder);
  }

  await app.listen(3000);
}
bootstrap();
