import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LoaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LoaderComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
