import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInjectionComponent } from './service-injection.component';

describe('ServiceInjectionComponent', () => {
  let component: ServiceInjectionComponent;
  let fixture: ComponentFixture<ServiceInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceInjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
