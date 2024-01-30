import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.scss',
})
export class InputChildComponent {
  @Input() title: string;
  @Input({ required: true }) requiredInput: string;

  @Input({ required: true }) currentUser: User;
  @Input({ transform: booleanAttribute }) showDate: boolean = false;

  @Input({ required: true, alias: 'title' }) aliasTitle: string;

  currentDate: Date = new Date();
}
