import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";


@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy
{
  subscriptions: Subscription = new Subscription();

  constructor(
  )
  {
  }

  ngOnInit(): void
  {
  }

  ngOnDestroy(): void
  {
    this.subscriptions.unsubscribe();
  }
}
