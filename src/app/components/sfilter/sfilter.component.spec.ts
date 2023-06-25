import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfilterComponent } from './sfilter.component';

describe('SfilterComponent', () => {
  let component: SfilterComponent;
  let fixture: ComponentFixture<SfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
