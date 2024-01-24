import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  testMethod(): void {
    console.log('Test service works!');
  }
}
