import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginServices } from 'src/app/services/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public login: any;

  constructor(private service: LoginServices) { }

  ngOnInit(): void {
    this.login = new Login('', '');
  }

  public conecting(): void {
    this.service.sendAuthenticationMessage(this.login.email, this.login.password);
  }
}
