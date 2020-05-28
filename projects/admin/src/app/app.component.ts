import { Component } from '@angular/core';
import { AuthService } from '../../../ust/src/lib/modules/auth/state';

@Component({
  selector: 'ust-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService
  ) {
    this.authService.init();
  }
}
