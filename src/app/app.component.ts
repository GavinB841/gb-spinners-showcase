import { Component } from '@angular/core';
import { GbSpinnerService } from '@gavinb841/gb-spinner';
import { GbBarSpinnerService } from '@gavinb841/gb-bar-spinner';
import { GbCircleSpinnerService } from '@gavinb841/gb-circle-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private gbSpinner: GbSpinnerService,
    private gbBarSpinner: GbBarSpinnerService,
    private gbCircleSpinner: GbCircleSpinnerService
    ) {}

  callSpinner() {
    this.gbSpinner.show();
    setTimeout(() => {
      this.gbSpinner.hide();
    }, 2000);
  }

  callBarSpinner() {
    this.gbBarSpinner.show();
    setTimeout(() => {
      this.gbBarSpinner.hide();
    }, 2000);
  }

  callCircleSpinner() {
    this.gbCircleSpinner.show();
    setTimeout(() => {
      this.gbCircleSpinner.hide();
    }, 2000);
  }
}
