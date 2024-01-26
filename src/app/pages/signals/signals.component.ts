import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent implements OnInit {
  names: string[] = [
    'Alex',
    'Stanislau',
    'Anastasiya',
    'Dzmitrii',
    'Olga',
    'Vitalii',
  ];

  ages: number[] = [19, 27, 55, 32, 12, 41];

  currentPerson: Signal<Person> = computed(() => ({
    name: this.selectedName(),
    age: this.selectedAge(),
  }));

  private selectedName: WritableSignal<string> = signal(this.names[0]);
  private selectedAge: WritableSignal<number> = signal(this.ages[0]);

  constructor() {
    effect(() => console.log(`effect: Selected name: ${this.selectedName()}`));
    effect(() => console.log(`effect: Selected age: ${this.selectedAge()}`));
  }

  ngOnInit(): void {
    // effect(() => console.log(`Selected age: ${this.selectedAge()}`));
  }

  onSelectName(name: string): void {
    this.selectedName.set(name);
  }

  onSelectAge(age: number): void {
    this.selectedAge.set(age);
  }

  onUpdateUserDataToRandom(): void {
    const randomNameIndex = Math.floor(Math.random() * this.names.length);
    const randomName = this.names[randomNameIndex];
    const randomAgeIndex = Math.floor(Math.random() * this.ages.length);
    const randomAge = this.ages[randomNameIndex];

    this.onSelectName(randomName);
    this.onSelectAge(randomAge);
  }
}
