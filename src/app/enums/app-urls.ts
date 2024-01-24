export enum NavigationUrls {
  Home = 'home',
  Protected = 'protected',
  Signals = 'signals',
  BuiltInControlFlow = 'built-in-control-flow',
}

export enum NavigationTitles {
  Home = 'home',
  Protected = 'protected',
  Signals = 'signals',
  BuiltInControlFlow = 'built in control flow',
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
];
