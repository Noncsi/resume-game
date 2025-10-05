import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IInteractableAreaConfig, Key } from '../models/types';
import {
  openOverlay,
  showPrompt,
  hidePrompt,
  setCurrentInteractableArea,
} from '../store/game.actions';
import { KEY } from '../models/keys';
import { CONTROLS } from '../models/collections';
import { selectIsPromptVisible } from '../store/game.selector';

@Injectable({ providedIn: 'root' })
export class GameService {
  store = inject(Store);
  public isPromptVisible$ = this.store.select(selectIsPromptVisible);

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
