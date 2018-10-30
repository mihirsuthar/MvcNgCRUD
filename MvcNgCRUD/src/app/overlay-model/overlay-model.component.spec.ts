import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayModelComponent } from './overlay-model.component';

describe('OverlayModelComponent', () => {
  let component: OverlayModelComponent;
  let fixture: ComponentFixture<OverlayModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
