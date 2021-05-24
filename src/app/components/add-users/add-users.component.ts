import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AppServices } from 'src/app/services/common.service';

interface Roles {
  name: string;
  code: string;
}
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  roles: Roles[];
  public user: User;

  constructor(private service: AppServices) {

    this.roles = [
      { name: 'Administrator', code: 'NY' },
      { name: 'Medic', code: 'RM' },
      { name: 'Ingrijitor', code: 'LDN' },
      { name: 'Pacient', code: 'IST' }
    ];
  }

  ngOnInit(): void {
    this.user = new User('', '', '', '', '');
  }
  public save() {
    // to be implemented
  }
}
