import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({
    name: 'Stanislau',
    email: 'stanislauI@gmail.com',
    password: 'angularIsBetterThanReact'
  })
  
  get currentUser$(): Observable<User> {
    return this.currentUserSubject;
  }
  
  constructor() { }

  isAuthorized(): Observable<boolean> {
    return of(true);
  }
}
