import { Component, OnInit } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss',
})
export class ForComponent implements OnInit {
  people: User[] = [];

  private names: string[] = [
    'stas',
    'alex',
    'nast',
    'dima',
    'darya',
    'aleh',
    'vadim',
  ];
  private emails: string[] = [
    'gmail',
    'email',
    'mail',
    'amazon',
    'hiqo-solutions',
  ];

  ngOnInit(): void {
    this.people = this.generatePeople();
  }

  onRemove(id: number): void {
    this.people = this.people.filter((person) => person.id !== id);
  }

  onSort(): void {
    this.people.sort((p1, p2) => p1.id - p2.id);
  }

  generatePeople(): User[] {
    const resultArr: User[] = [];
    for (let i = 0; i < 10; i++) {
      const randomNameIndex = this.getRandomNumber(this.names.length);
      const newPerson = {
        id: this.getRandomNumber(100),
        name: this.names[randomNameIndex],
        email: `
        ${this.names[randomNameIndex]}@${
          this.emails[this.getRandomNumber(this.emails.length)]
        }.com`,
        password: this.getRandomNumber(10) + '',
      };

      resultArr.push(newPerson);
    }

    return resultArr;
  }

  private getRandomNumber(maxValue: number): number {
    return Math.floor(Math.random() * maxValue);
  }
}
