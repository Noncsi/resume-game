import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as GameActions from '../store/game.actions';
import { OverlayPayload } from '../store/game.reducer';

@Injectable({ providedIn: 'root' })
export class GameBridgeService {
  constructor(private store: Store) {}

  openOverlay(payload: OverlayPayload) {
    this.store.dispatch(GameActions.openOverlay({ payload }));
  }

  closeOverlay() {
    this.store.dispatch(GameActions.closeOverlay());
  }

  setPrompt(text: string) {
    this.store.dispatch(GameActions.setPrompt({ text }));
  }
}
