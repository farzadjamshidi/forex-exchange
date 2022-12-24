import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { BaseResolver } from "../base-resolver";
import { HomePage } from "./home.page.model";

@Injectable()
export class HomePageResolver extends BaseResolver<HomePage>
{
  constructor(
  )
  {
    super();
  }

  loadData()
  {
    const response: HomePage = {
      title: 'Title from resolver ...'
    };
    return of(response);
  }
}
