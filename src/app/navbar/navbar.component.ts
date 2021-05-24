import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { LoginServices } from '../services/login.services';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isConnected = false;
  items: MegaMenuItem[];
  constructor(private service: LoginServices) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Setari',icon: 'pi pi-fw pi-cog ',
        items: [
          [
            {
              items: [{ icon: 'pi pi-user', label: 'Utilizatori' }],
            },
            {
              items: [{ icon: 'pi pi-plus', label: 'Adauga client' }],
            },
          ]
        ]
      }
    ]
  }
  public logoutAndRefreshPage(): void {
    window.location.href = '/';
    this.service.sendLogoutMessage();
  }
}
