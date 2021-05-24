import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output, TemplateRef } from '@angular/core';


@Component({
  selector: 'ocean-panel',
  templateUrl: './ocean-panel.component.html',
  styleUrls: ['./ocean-panel.component.css']
})
export class OceanPanelComponent implements OnInit {
  @Input() contentTemplate:TemplateRef<any>;
  @Input() title:string;
  // @Input() headerTemplate:TemplateRef<any>;
  @Input() headerButtonIcon:string="pi pi-plus";
  @Input() enableFooter:boolean = false;
  @Output() onHeaderOutput:EventEmitter<void>= new EventEmitter<void>();
  @Output() onConfirmOutput:EventEmitter<void>= new EventEmitter<void>();
  @Output() onCancelOutput:EventEmitter<void>= new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
