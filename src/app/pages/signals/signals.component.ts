import { CommonModule } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';

interface Person {
  name: string;
  age: number;
}

enum AgeCategory {
  Young = 'young',
  Adult = 'adult',
}

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
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

  ageCategory: Signal<AgeCategory> = computed(() => 
    this.selectedAge() > 18 ? AgeCategory.Adult : AgeCategory.Young
  );

  counter: WritableSignal<number> = signal(0);

  initialObservableList$: Observable<number[]> = of([1, 2, 3, 4, 5, 6]);
  signalListFromIbservable = toSignal(this.initialObservableList$);
  observableListFromSignal$: Observable<number[]> = toObservable(this.signalListFromIbservable);

  private selectedName: WritableSignal<string> = signal(this.names[0]);
  private selectedAge: WritableSignal<number> = signal(this.ages[0], { equal: (a, b) => false });
  private readonlySignal: Signal<void> = signal(null).asReadonly();

  constructor() {
    effect(() => console.log(`[Effect] Selected name: ${this.selectedName()}`));
    effect(() => console.log(`[Effect] Selected age: ${this.selectedAge()}`));
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
    const randomAge = this.ages[randomAgeIndex];

    this.onSelectName(randomName);
    this.onSelectAge(randomAge);
  }

  onIncrementCounter(): void {
    this.counter.update((value) => value + 1);
  }
}
