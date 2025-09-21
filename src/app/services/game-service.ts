import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as action from '../store/game.actions';
import { IInteractableAreaConfig } from '../models/types';

@Injectable({ providedIn: 'root' })
export class GameService {
  constructor(private store: Store) {}

  openOverlay(area: IInteractableAreaConfig) {
    this.store.dispatch(action.openOverlay({ area }));
  }

  closeOverlay() {
    this.store.dispatch(action.closeOverlay());
  }

  setPrompt(text: string) {
    this.store.dispatch(action.setPrompt({ text }));
  }
}
