import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginServices } from './services/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Document Manager';
  public isConnected = false;
  public subscription: Subscription;

  constructor(private service: LoginServices) {
    this.subscription = this.service.getAuthenticatedState()
      .subscribe(() => {
        this.isConnected = true;
      }
      );
    this.subscription = this.service.getLogoutState()
      .subscribe(() => {
        this.isConnected = false;
      }
      );
  }
}
