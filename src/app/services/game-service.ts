import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IInteractableAreaConfig } from '../models/types';
import {
  toggleMusic,
  setCurrentArea,
  interact,
  toggleSounds,
} from '../store/game.actions';

@Injectable({ providedIn: 'root' })
export class GameService {
  store = inject(Store);

  toggleBackgroundMusic(): void {
    this.store.dispatch(toggleMusic());
  }

  toggleBackgroundSounds(): void {
    this.store.dispatch(toggleSounds());
  }

  enterArea(area: IInteractableAreaConfig): void {
    this.store.dispatch(setCurrentArea({ area }));
  }

  leaveArea(): void {
    this.store.dispatch(setCurrentArea(null));
  }

  interact(): void {
    this.store.dispatch(interact());
  }
}
