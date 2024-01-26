import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-formats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-formats.component.html',
  styleUrl: './date-formats.component.scss',
})
export class DateFormatsComponent {
  date: Date = new Date();
}
