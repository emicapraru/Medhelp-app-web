import { Component, OnInit } from '@angular/core';
import { IClientsListItem } from 'src/app/contracts/clients-list-item.model';
import { TableColumn } from 'src/app/common/ocean-table/ocean-table.component';
import { MenuItem } from 'primeng/api';
import { alertsData, clientsData, observationsData } from './sales.mockup';
import { observable } from 'rxjs';
export interface Car {
  vin;
  year;
  brand;
  color;
}

export interface Note {
  title: string;
  textContent: string;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})

export class SalesComponent implements OnInit {

  public clients = clientsData;
  public alerts = alertsData;
  public observations = observationsData;

  public columns: TableColumn[] = [
    { field: 'name', header: 'Name', isSortable: true },
    { field: 'status', header: 'Status', isSortable: true },
    { field: 'tasks', header: 'Sarcini', isSortable: false }
  ];

  items: MenuItem[];
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

  }
}
