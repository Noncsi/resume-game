import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  enterArea,
  hidePrompt,
  interact,
  leaveArea,
  openOverlay,
  showPrompt,
  toggleBackgroundMusic,
  toggleBackgroundMusicError,
  toggleBackgroundMusicSuccess,
} from './game.actions';
import { catchError, filter, map, of, switchMap, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsBackgroundMusicOn, selectIsPromptVisible } from './game.selector';
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
        const backgroundMusic = AUDIOS.get(KEY.audio.backgroundMusic);
        if (!backgroundMusic) return throwError(() => 'Background music not found');
        isOn ? backgroundMusic.stop() : backgroundMusic.play();
        return of(toggleBackgroundMusicSuccess());
      }),
      catchError((error) =>
        of(
          toggleBackgroundMusicError({
            error: error?.message ?? 'Failed to toggle background music',
          })
        )
      )
    )
  );

  enterArea$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enterArea),
      map(() => {
        return showPrompt();
      })
    )
  );

  leaveArea$ = createEffect(() =>
    this.actions$.pipe(
      ofType(leaveArea),
      map(() => {
        return hidePrompt();
      })
    )
  );

  interact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(interact),
      concatLatestFrom(() => this.store.select(selectIsPromptVisible)),
      filter(([, isOn]) => isOn),
      map(() => openOverlay())
    )
  );
}
