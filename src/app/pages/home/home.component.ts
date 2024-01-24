import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
