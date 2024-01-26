import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormatsComponent } from './date-formats.component';

describe('DateFormatsComponent', () => {
  let component: DateFormatsComponent;
  let fixture: ComponentFixture<DateFormatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateFormatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
