import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IInteractableAreaConfig } from '../models/types';
import {
  closeOverlay,
  openOverlay,
  setPrompt,
  showPrompt,
  hidePrompt,
} from '../store/game.actions';
import { Prompt } from '../models/interaction-prompt';
import { Observable } from 'rxjs';
import { selectIsPromptVisible } from '../store/game.selector';
import { INTERACTABLE_AREAS } from '../models/collections';

@Injectable({ providedIn: 'root' })
export class GameService {
  store = inject(Store);

  testService(): void {
    console.log('GameService is working!');
  }

  openOverlay(area: IInteractableAreaConfig) {
    this.store.dispatch(openOverlay({ area }));
  }

  closeOverlay() {
    this.store.dispatch(closeOverlay());
  }

  selectPromptVisible(): Observable<boolean> {
    return this.store.select(selectIsPromptVisible);
  }

  setPrompt(prompt: Prompt) {
    this.store.dispatch(setPrompt({ prompt }));
  }

  showPrompt(x: number, y: number) {
    this.store.dispatch(showPrompt({ x, y }));
  }

  hidePrompt() {
    this.store.dispatch(hidePrompt());
  }

  handleInteraction(areaKey: string): void {
    const area = INTERACTABLE_AREAS.get(areaKey);
    if (area) {
      this.store.dispatch(openOverlay({ area }));
    }
  }
}
