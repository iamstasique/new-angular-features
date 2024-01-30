import { Component, OnInit } from '@angular/core';
import { InputChildComponent } from './components/input-child/input-child.component';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-parent',
  standalone: true,
  templateUrl: './input-parent.component.html',
  styleUrl: './input-parent.component.scss',
  imports: [CommonModule, InputChildComponent],
})
export class InputParentComponent implements OnInit {
  currentUser$: Observable<User>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser$ = this.authService.currentUser$;
  }
}
