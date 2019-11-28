import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GbSpinnerModule } from '@gavinb841/gb-spinner';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GbSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
