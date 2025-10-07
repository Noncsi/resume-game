import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameService } from '../services/game-service';
import {
  toggleBackgroundMusic,
  toggleBackgroundMusicError,
  toggleBackgroundMusicSuccess,
} from './game.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsBackgroundMusicOn } from './game.selector';
import { AUDIOS } from '../models/collections';
import { KEY } from '../models/keys';
import { concatLatestFrom } from '@ngrx/operators';

@Injectable()
export class GameEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  toggleBackgroundMusic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleBackgroundMusic),
      concatLatestFrom(() => this.store.select(selectIsBackgroundMusicOn)),
      switchMap(([, isOn]) => {
        try {
          const backgroundMusic = AUDIOS.get(KEY.audio.backgroundMusic);
          if (!backgroundMusic) throw new Error('Background music not found');

          isOn ? backgroundMusic.stop() : backgroundMusic.play();

          return of(toggleBackgroundMusicSuccess());
        } catch (error: any) {
          return of(
            toggleBackgroundMusicError({
              error: error?.message || 'Failed to toggle background music',
            })
          );
        }
      })
    )
  );
}
