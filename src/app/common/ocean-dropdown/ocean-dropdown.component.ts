import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'ocean-dropdown',
  templateUrl: './ocean-dropdown.component.html',
  styleUrls: ['./ocean-dropdown.component.css']
})
export class OceanDropdownComponent implements OnInit {
  @Input() items:SelectItem[];
  @Input() selectedItem:SelectItem;
  @Output() selectedItemChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedValueChange(newValue:SelectItem) {
    console.log('newvalue OceandDropDown', newValue)
    this.selectedItem = newValue;
    this.selectedItemChange.emit(newValue);
  }

}
