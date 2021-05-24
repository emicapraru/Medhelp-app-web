import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  public editMode=false;
  constructor() { }

  ngOnInit(): void {
  }

  onHeaderButton(){
    console.warn('header Edit');
    this.editMode = true;
  }

  onFooterCancelBtn(){
    console.error('Footer Cancel')
  }

  onFooterOKBtn(){
    console.log('Footer OK')
  }
  add(){
    console.warn('ADDD was presed')
  }
}
