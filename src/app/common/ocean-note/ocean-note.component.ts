import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ocean-note',
  templateUrl: './ocean-note.component.html',
  styleUrls: ['./ocean-note.component.css']
})
export class OceanNoteComponent implements OnInit {
  @Input() backgroundColor = '#ffc';
  @Input() title: string;
  @Input() textContent: string;
  constructor() { }

  ngOnInit(): void {
  }

}
