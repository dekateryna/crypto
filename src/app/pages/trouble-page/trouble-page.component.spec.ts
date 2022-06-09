import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroublePageComponent } from './trouble-page.component';

describe('TroublePageComponent', () => {
  let component: TroublePageComponent;
  let fixture: ComponentFixture<TroublePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroublePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroublePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
