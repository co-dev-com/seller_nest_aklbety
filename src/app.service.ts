import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(
    private _ConfigService: ConfigService,
    private prisma: PrismaService,
  ) {}
  getHello(): string {
    return 'Hello World';
  }
}
