import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlandingComponent } from './mlanding.component';

describe('MlandingComponent', () => {
  let component: MlandingComponent;
  let fixture: ComponentFixture<MlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
