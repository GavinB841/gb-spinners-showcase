import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GbSpinnerModule } from '@gavinb841/gb-spinner';

import { AppComponent } from './app.component';
import { GbBarSpinnerModule } from '@gavinb841/gb-bar-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GbSpinnerModule,
    GbBarSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
