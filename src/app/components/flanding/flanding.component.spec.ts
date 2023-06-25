import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlandingComponent } from './flanding.component';

describe('FlandingComponent', () => {
  let component: FlandingComponent;
  let fixture: ComponentFixture<FlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
