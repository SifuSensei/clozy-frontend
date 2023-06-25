import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfilterComponent } from './wfilter.component';

describe('WfilterComponent', () => {
  let component: WfilterComponent;
  let fixture: ComponentFixture<WfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
