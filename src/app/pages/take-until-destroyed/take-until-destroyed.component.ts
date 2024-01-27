import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Observable, from, interval, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-take-until-destroyed',
  standalone: true,
  imports: [],
  templateUrl: './take-until-destroyed.component.html',
  styleUrl: './take-until-destroyed.component.scss',
})
export class TakeUntilDestroyedComponent implements OnInit {
  private interval: Observable<number> = interval(1000);
  
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.interval
      .pipe(
        takeUntilDestroyed(),
        tap((data) => console.log(`constructor - ${data}`))
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.interval
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((data) => console.log(`OnInit - ${data}`))
      )
      .subscribe();
  }
}
