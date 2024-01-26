import { Routes } from '@angular/router';
import { NavigationUrls } from './enums/app-urls';
import { HomeComponent } from './pages/home/home.component';
import { ProtectedComponent } from './pages/protected/protected.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { BuiltInControlFlowComponent } from './pages/built-in-control-flow/built-in-control-flow.component';
import { ServiceInjectionComponent } from './pages/service-injection/service-injection.component';
import { DateFormatsComponent } from './pages/date-formats/date-formats.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: NavigationUrls.Home,
    pathMatch: 'full',
  },
  {
    path: NavigationUrls.Home,
    loadComponent: () => HomeComponent,
    children: [
        {
          path: NavigationUrls.Protected,
          loadComponent: () => ProtectedComponent,
        },
        {
          path: NavigationUrls.Signals,
          loadComponent: () => SignalsComponent,
        },
        {
          path: NavigationUrls.BuiltInControlFlow,
          loadComponent: () => BuiltInControlFlowComponent,
        },
        {
          path: NavigationUrls.ServiceInjection,
          loadComponent: () => ServiceInjectionComponent,
        },
        {
          path: NavigationUrls.DateFormats,
          loadComponent: () => DateFormatsComponent,
        },
    ],
  },
];
