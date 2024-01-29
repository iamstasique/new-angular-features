import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ProtectedChildComponent } from './protected-child/protected-child.component';

@Component({
  selector: 'app-protected',
  standalone: true,
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss',
  imports: [ProtectedChildComponent],
})
export class ProtectedComponent implements AfterViewInit {
  @Input() dateFromRouter: string;

  @ViewChild('protectedChild')
  protectedChild: ProtectedChildComponent;

  public publicField: string = 'public';
  private privateField: string = 'private';
  protected protectedField: string = 'protected';

  ngAfterViewInit(): void {
    console.log('public: ', this.protectedChild.publicField);
    // console.log('protected: ', this.protectedChild.protectedField);
    // console.log('private: ', this.protectedChild.privateField);
  }
}
