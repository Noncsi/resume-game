import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventKey, IInteractableAreaConfig } from '../models/types';
import { closeOverlay, openOverlay, setPrompt } from '../store/game.actions';
import { EventBus } from './event-bus';

@Injectable({ providedIn: 'root' })
export class GameService {
  store = inject(Store);

  registerEventListeners(): void {
    Object.values(EventKey).forEach((eventKey) => {
      EventBus.on(eventKey, (payload) => {
        openOverlay(payload);
      });
    });
  }

  openOverlay(area: IInteractableAreaConfig) {
    this.store.dispatch(openOverlay({ area }));
  }

  closeOverlay() {
    this.store.dispatch(closeOverlay());
  }

  setPrompt(text: string) {
    this.store.dispatch(setPrompt({ text }));
  }
}
