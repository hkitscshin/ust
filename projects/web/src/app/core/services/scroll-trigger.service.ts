import { Injectable } from '@angular/core';
import ScrollTrigger from '@terwanerik/scrolltrigger';

@Injectable({
  providedIn: 'root'
})
export class ScrollTriggerService {

  constructor() { }

  createScrollTrigger(): ScrollTrigger {
    return new ScrollTrigger({
      trigger: {
        once: false
      }
    });
  }
}
