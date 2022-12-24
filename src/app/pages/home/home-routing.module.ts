import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home.page.component';
import { HomePageResolver } from './home.page.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { resolved: HomePageResolver },
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomePageResolver]
})
export class HomeRoutingModule { }
