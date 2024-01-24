import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedChildComponent } from './protected-child.component';

describe('ProtectedChildComponent', () => {
  let component: ProtectedChildComponent;
  let fixture: ComponentFixture<ProtectedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtectedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
