import { Pipe, PipeTransform } from '@angular/core';
import { FETranslateService } from '../../helpers/fe-translate/fe-translate.service';

@Pipe({
  name: 'feTranslate',
})
export class FETranslatePipe implements PipeTransform
{
  constructor(private teiTransalteService: FETranslateService)
  { }
  transform(value: string, ...args: any[]): any
  {
    return this.teiTransalteService.getValue(value, args);
  }
}
