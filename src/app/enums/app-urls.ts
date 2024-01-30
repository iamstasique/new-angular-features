export enum NavigationUrls {
  Home = 'home',
  Protected = 'protected',
  Signals = 'signals',
  BuiltInControlFlow = 'built-in-control-flow',
  ServiceInjection = 'service-injection',
  DateFormats = 'date-formats',
  TakeUntilDestroyed = 'take-until-destroyed',
  ParentInput = 'parent-inputs',
  ChildInput = 'child-inputs',
}

export enum NavigationTitles {
  Home = 'home',
  Protected = 'protected',
  Signals = 'signals',
  BuiltInControlFlow = 'built in control flow',
  ServiceInjection = 'service injection',
  DateFormats = 'date formats',
  TakeUntilDestroyed = 'take until destroyed',
  ParentInput = 'parent inputs',
  ChildInput = 'child inputs',
}

export interface NavigationUrlItem {
  url: string;
  title: string;
}

export const NAVIGATION_URL_LIST: NavigationUrlItem[] = [
  {
    url: NavigationUrls.Home,
    title: NavigationTitles.Home,
  },
  {
    url: NavigationUrls.Protected,
    title: NavigationTitles.Protected,
  },
  {
    url: NavigationUrls.Signals,
    title: NavigationTitles.Signals,
  },
  {
    url: NavigationUrls.BuiltInControlFlow,
    title: NavigationTitles.BuiltInControlFlow,
  },
  {
    url: NavigationUrls.ServiceInjection,
    title: NavigationTitles.ServiceInjection,
  },
  {
    url: NavigationUrls.DateFormats,
    title: NavigationTitles.DateFormats,
  },
  {
    url: NavigationUrls.TakeUntilDestroyed,
    title: NavigationTitles.TakeUntilDestroyed,
  },
  {
    url: NavigationUrls.ParentInput,
    title: NavigationTitles.ParentInput,
  },
  {
    url: NavigationUrls.ChildInput,
    title: NavigationTitles.ChildInput,
  },
];
