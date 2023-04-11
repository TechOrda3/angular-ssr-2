import {inject, InjectionToken} from '@angular/core';
import {DOCUMENT} from '@angular/common';

export const LOCAL_STORAGE = new InjectionToken<Storage>('localstorage token', {
  providedIn: 'root',
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    return defaultView!.localStorage;
  }
});

export const NAVIGATOR = new InjectionToken<Navigator>('navigator token', {
  providedIn: 'root',
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    return defaultView!.navigator;
  }
});
