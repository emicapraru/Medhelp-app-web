import { Component, OnInit, Input } from '@angular/core';

export interface AccordionContent{
  header:string;
  content:{[keyname:string]:string | number};
}

@Component({
  selector: 'ocean-accordion',
  templateUrl: './ocean-accordion.component.html',
  styleUrls: ['./ocean-accordion.component.css']
})
export class OceanAccordionComponent implements OnInit {
  public index = 1;
  @Input() items:AccordionContent[];
  constructor() { }

  ngOnInit(): void {
  }

}
