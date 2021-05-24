import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanDialogComponent } from './ocean-dialog.component';

describe('OceanDialogComponent', () => {
  let component: OceanDialogComponent;
  let fixture: ComponentFixture<OceanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
