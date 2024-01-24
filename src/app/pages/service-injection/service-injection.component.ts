import { Component, OnInit, inject } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-service-injection',
  standalone: true,
  imports: [],
  templateUrl: './service-injection.component.html',
  styleUrl: './service-injection.component.scss',
})
export class ServiceInjectionComponent implements OnInit {
  // Angular 14 <=
  private firstTestService = inject(TestService);
  private thirdRestService: TestService;
  
  // Angular 14 >
  constructor(private secondTestService: TestService) {
    this.thirdRestService = inject(TestService);
  }

  ngOnInit(): void {
    this.firstTestService.testMethod();
    this.secondTestService.testMethod();
    this.thirdRestService.testMethod();
  }
}
