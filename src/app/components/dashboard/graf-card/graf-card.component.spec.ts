import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafCardComponent } from './graf-card.component';

describe('GrafCardComponent', () => {
  let component: GrafCardComponent;
  let fixture: ComponentFixture<GrafCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
