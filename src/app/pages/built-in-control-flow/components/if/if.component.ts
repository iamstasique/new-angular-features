import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum Names {
  Stanislau = 'Stanislau',
  Dmitrii = 'Dmitrii',
  Anastasia = 'Anastasia',
}

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss',
})
export class IfComponent {
  age: number = 61;
}
