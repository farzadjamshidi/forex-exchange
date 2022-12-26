import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, FactoryProvider } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FETranslateService } from './core/helpers/fe-translate/fe-translate.service';

export const translateFactory: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: appTranslateFactory,
  deps: [TranslateService, FETranslateService],
  multi: true
};

export function appTranslateFactory(translate: TranslateService)
{
  return (): Promise<void> =>
  {
    translate.setDefaultLang('en');
    translate.use('en');
    return new Promise<void>((resolve) =>
    {
      translate.onLangChange.subscribe(() =>
      {
        resolve();
      });
    });
  };
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader
{
  return new TranslateHttpLoader(http);
}
