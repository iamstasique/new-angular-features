import { Component } from '@angular/core';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss'
})
export class ProtectedComponent {
  public publicField: string = 'public';
  private privateField: string = 'private';
  protected protectedField: string = 'protected';
}
