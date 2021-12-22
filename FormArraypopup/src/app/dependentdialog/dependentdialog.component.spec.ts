import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentdialogComponent } from './dependentdialog.component';

describe('DependentdialogComponent', () => {
  let component: DependentdialogComponent;
  let fixture: ComponentFixture<DependentdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
