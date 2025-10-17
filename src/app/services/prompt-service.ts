import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICoordinate, Text } from '../models/types';
import { selectIsPromptVisible, selectPromptPosition } from '../store/game.selector';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class PromptService {
  store = inject(Store);
  prompt: Text;

  constructor() {
    this.store
      .select(selectIsPromptVisible)
      .pipe(
        tap((isVisible: boolean) => {
          console.log('Setting prompt visibility to:', isVisible);
          this.prompt?.setVisible(isVisible);
        }),
        takeUntilDestroyed()
      )
      .subscribe();

    this.store
      .select(selectPromptPosition)
      .pipe(
        tap((position: ICoordinate) => {
          this.prompt?.setPosition(position.x, position.y);
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
