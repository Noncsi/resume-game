import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IInteractableAreaConfig } from '../models/types';
import {
  toggleBackgroundMusic,
  enterArea,
  interact,
  leaveArea,
} from '../store/game.actions';
import { selectInteractableArea, selectIsPromptVisible } from '../store/game.selector';

@Injectable({ providedIn: 'root' })
export class GameService {
  store = inject(Store);
  isPromptVisible$ = this.store.select(selectIsPromptVisible);
  currentArea$ = this.store.select(selectInteractableArea);

  toggleBackgroundMusic() {
    this.store.dispatch(toggleBackgroundMusic());
  }

  // toggleSound(key: string, shouldBePlaying: boolean) {
  //   const sound = AUDIOS.get(key);
  //   shouldBePlaying ? sound.play() : sound.stop();
  // }

  enterArea(area: IInteractableAreaConfig): void {
    this.store.dispatch(enterArea({ area }));
  }

  leaveArea(): void {
    this.store.dispatch(leaveArea());
  }

  interact(): void {
    this.store.dispatch(interact());
  }
}
