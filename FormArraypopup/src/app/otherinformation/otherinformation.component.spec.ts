import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherinformationComponent } from './otherinformation.component';

describe('OtherinformationComponent', () => {
  let component: OtherinformationComponent;
  let fixture: ComponentFixture<OtherinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
