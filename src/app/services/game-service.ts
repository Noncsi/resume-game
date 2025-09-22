import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IInteractableAreaConfig } from '../models/types';
import { closeOverlay, openOverlay, setPrompt } from '../store/game.actions';
import { EventBus } from './event-bus';
import { KEY } from '../models/keys';

@Injectable({ providedIn: 'root' })
export class GameService {
  store = inject(Store);

  registerEventListeners(): void {
    Object.values(KEY.event).forEach((eventKey) => {
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
