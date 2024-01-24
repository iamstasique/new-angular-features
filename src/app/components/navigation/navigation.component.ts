import { Component } from '@angular/core';
import {
  NAVIGATION_URL_LIST,
  NavigationUrlItem,
  NavigationUrls,
} from '../../enums/app-urls';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navigationItems: NavigationUrlItem[] = NAVIGATION_URL_LIST;

  getUrl(item: NavigationUrlItem): string[] {
    return item.url === NavigationUrls.Home ? ['/'] : [item.url];
  }
}
