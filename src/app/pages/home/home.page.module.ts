import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.page.component';

const COMPONENTS = [
  HomePageComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
  ]
})
export class HomePageModule { }
