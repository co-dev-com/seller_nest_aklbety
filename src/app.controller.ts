import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18nContext, I18nService } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18n: I18nService,
  ) {}

  @Get()
  getHello(): string {
    return this.i18n.t('lang.HELLO', {
      args: { name: 'Toon', opinion: 'Terrible' },
      lang: I18nContext.current().lang,
    });
  }
}
