import { Routes } from '@angular/router';
import { NavigationUrls } from './enums/app-urls';
import { HomeComponent } from './pages/home/home.component';
import { ProtectedComponent } from './pages/protected/protected.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { BuiltInControlFlowComponent } from './pages/built-in-control-flow/built-in-control-flow.component';
import { ServiceInjectionComponent } from './pages/service-injection/service-injection.component';
import { DateFormatsComponent } from './pages/date-formats/date-formats.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TakeUntilDestroyedComponent } from './pages/take-until-destroyed/take-until-destroyed.component';
import { InputParentComponent } from './pages/input-parent/input-parent.component';
import { InputChildComponent } from './pages/input-parent/components/input-child/input-child.component';

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
        canActivate: [() => inject(AuthService).isAuthorized()],
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
      {
        path: NavigationUrls.TakeUntilDestroyed,
        loadComponent: () => TakeUntilDestroyedComponent,
      },
      {
        path: NavigationUrls.ParentInput,
        loadComponent: () => InputParentComponent,
      },
      {
        path: NavigationUrls.ChildInput,
        loadComponent: () => InputChildComponent,
        resolve: { currentUser: () => inject(AuthService).currentUser$ },
      },
    ],
  },
];
