import { BreakPoint } from '@angular/flex-layout';

export type MediaQuery = 'sm' | 'lg';

export const BREAKPOINTS: BreakPoint[] = [
  {
    alias: 'lt-lg',
    mediaQuery: 'screen and (max-width: 1179px)'
  },
  {
    alias: 'gt-sm',
    mediaQuery: 'screen and (min-width: 600px)'
  },
  {
    alias: 'sm',
    mediaQuery: 'screen and (max-width: 599px)'
  },
  {
    alias: 'md',
    mediaQuery: 'screen and (min-width: 600px) and (max-width: 1179px)'
  },
  {
    alias: 'lg',
    mediaQuery: 'screen and (min-width: 1180px)'
  }
];
