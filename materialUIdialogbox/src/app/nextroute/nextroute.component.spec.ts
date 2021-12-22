import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextrouteComponent } from './nextroute.component';

describe('NextrouteComponent', () => {
  let component: NextrouteComponent;
  let fixture: ComponentFixture<NextrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
