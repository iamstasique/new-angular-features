import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-protected-child',
  standalone: true,
  imports: [],
  templateUrl: './protected-child.component.html',
  styleUrl: './protected-child.component.scss',
})
export class ProtectedChildComponent {
  @Input() title: string = 'hello';
  @Input({ required: true }) requiredTitle: string;

  public publicField: string = 'public';
  private privateField: string = 'private';
  protected protectedField: string = 'protected';
}
