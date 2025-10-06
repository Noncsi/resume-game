import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IInteractableAreaConfig, Key } from '../models/types';
import {
  openOverlay,
  showPrompt,
  hidePrompt,
  setCurrentInteractableArea,
  toggleBackgroundMusic,
} from '../store/game.actions';
import { KEY } from '../models/keys';
import { CONTROLS } from '../models/collections';
import { selectIsBackgroundMusicOn, selectIsPromptVisible } from '../store/game.selector';

@Injectable({ providedIn: 'root' })
export class GameService {
  store = inject(Store);
  isPromptVisible$ = this.store.select(selectIsPromptVisible);
  isBackgroundMusicOn$ = this.store.select(selectIsBackgroundMusicOn);

  toggleBackgroundMusic() {
    this.store.dispatch(toggleBackgroundMusic());
  }

  enterInteractableArea(area: IInteractableAreaConfig): void {
    this.store.dispatch(setCurrentInteractableArea({ area }));
  }

  showPrompt(x: number, y: number) {
    this.store.dispatch(showPrompt({ x, y }));
    const keyE = CONTROLS.get(KEY.control.E) as Key;
    keyE.on('down', () => {
      this.store.dispatch(openOverlay());
      this.hidePrompt();
    });
  }

  hidePrompt() {
    this.store.dispatch(hidePrompt());
  }
}
