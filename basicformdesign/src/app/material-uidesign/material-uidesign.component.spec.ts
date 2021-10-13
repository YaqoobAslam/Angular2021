import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUIdesignComponent } from './material-uidesign.component';

describe('MaterialUIdesignComponent', () => {
  let component: MaterialUIdesignComponent;
  let fixture: ComponentFixture<MaterialUIdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUIdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialUIdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
