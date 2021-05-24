import { Component, OnInit, Input } from '@angular/core';


export interface TableColumn {
  field: string;
  header: string;
  isSortable: boolean;
}

@Component({
  selector: 'ocean-table',
  templateUrl: './ocean-table.component.html',
  styleUrls: ['./ocean-table.component.css']
})
export class OceanTableComponent implements OnInit {
  @Input() columns: TableColumn[];
  @Input() items: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
