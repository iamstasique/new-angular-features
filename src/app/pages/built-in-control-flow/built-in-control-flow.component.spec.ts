import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInControlFlowComponent } from './built-in-control-flow.component';

describe('BuiltInControlFlowComponent', () => {
  let component: BuiltInControlFlowComponent;
  let fixture: ComponentFixture<BuiltInControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuiltInControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
