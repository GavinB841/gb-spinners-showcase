import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GbSpinnerModule } from '@gavinb841/gb-spinner';
import { GbBarSpinnerModule } from '@gavinb841/gb-bar-spinner';
import { GbCircleSpinnerModule } from '@gavinb841/gb-circle-spinner';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GbSpinnerModule,
    GbBarSpinnerModule,
    GbCircleSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
