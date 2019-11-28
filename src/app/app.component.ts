import { Component } from '@angular/core';
import { GbSpinnerService } from '@gavinb841/gb-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private gbSpinner: GbSpinnerService) {

  }

  wrapSpinner() {
    this.gbSpinner.show();
    setTimeout(() => {
      this.gbSpinner.hide();
    }, 2000);
  }
}
