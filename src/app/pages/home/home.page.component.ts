import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePage } from '../base-page';
import { HomePage } from './home.page.model';


@Component({
  selector: 'fe-home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent extends BasePage implements OnInit, OnDestroy
{
  homePage?: HomePage;

  constructor(
    private activatedRoute: ActivatedRoute
  )
  {
    super();
  }

  override ngOnInit()
  {
    this.subscriptions.add(
      this.activatedRoute.data.subscribe(({ resolved }) =>
      {
        this.homePage = resolved;
      })
    );
  }
}

