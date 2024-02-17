import { Component } from '@angular/core';
import { NavigationUrls } from '../../enums/app-urls';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-built-in-control-flow',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './built-in-control-flow.component.html',
  styleUrl: './built-in-control-flow.component.scss',
})
export class BuiltInControlFlowComponent {
  navigationItems: NavigationUrls[] = [
    NavigationUrls.For,
    NavigationUrls.If,
    NavigationUrls.Switch,
    NavigationUrls.Defer,
  ];
}
