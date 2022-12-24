import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BasePage } from '../base-page';


@Component({
  selector: 'fe-home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent extends BasePage implements OnInit, OnDestroy
{

  constructor(
  )
  {
    super();
  }

  override ngOnInit(): void
  {
  }
}

