import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class FETranslateService extends TranslateService
{
  getValue(value: string, args: any[])
  {
    return super.instant(value, args);
  }
}
