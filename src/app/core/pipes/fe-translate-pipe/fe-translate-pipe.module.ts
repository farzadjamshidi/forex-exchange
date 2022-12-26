import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FETranslateService } from '../../helpers/fe-translate/fe-translate.service';
import { FETranslatePipe } from './fe-translate.pipe';


@NgModule({
  declarations: [
    FETranslatePipe
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    FETranslatePipe,
    TranslateModule
  ],
  providers: [
    FETranslateService
  ]
})
export class FETranslatePipeModule { }
