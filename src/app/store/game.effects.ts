import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  closeOverlay,
  enterArea,
  gameEnd,
  hidePrompt,
  interact,
  leaveArea,
  openOverlay,
  playSound,
  showPrompt,
  toggleMusic,
  toggleMusicError,
  toggleMusicSuccess,
  toggleSounds,
  toggleSoundsError,
  toggleSoundsSuccess,
} from './game.actions';
import { catchError, filter, map, of, switchMap, tap, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectIsMusicOn,
  selectIsSoundsOn as selectIsSoundsOn,
  selectIsPromptVisible,
  selectIsEveryFragmentCollected,
} from './game.selector';
import { AUDIOS } from '../models/collections';
import { KEY } from '../models/keys';
import { concatLatestFrom } from '@ngrx/operators';

@Injectable()
export class GameEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  toggleMusic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleMusic),
      concatLatestFrom(() => this.store.select(selectIsMusicOn)),
      switchMap(([, isOn]) => {
        const backgroundMusic = AUDIOS.get(KEY.audio.backgroundMusic);
        if (!backgroundMusic) return throwError(() => 'Background music not found');
        isOn ? backgroundMusic.stop() : backgroundMusic.play();
        return of(toggleMusicSuccess());
      }),
      catchError((error) =>
        of(
          toggleMusicError({
            error: error?.message ?? 'Failed to toggle background music',
          })
        )
      )
    )
  );

  toggleSounds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleSounds),
      concatLatestFrom(() => this.store.select(selectIsSoundsOn)),
      switchMap(() => {
        return of(toggleSoundsSuccess());
      }),
      catchError((error) =>
        of(
          toggleSoundsError({
            error: error?.message ?? 'Failed to toggle background sounds',
          })
        )
      )
    )
  );

  showPromptOnAreaEnter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enterArea),
      map(() => showPrompt())
    )
  );

  hidePromptOnAreaLeave$ = createEffect(() =>
    this.actions$.pipe(
      ofType(leaveArea),
      map(() => hidePrompt())
    )
  );

  overOverlayOnInteract$ = createEffect(() =>
    this.actions$.pipe(
      ofType(interact),
      concatLatestFrom(() => this.store.select(selectIsPromptVisible)),
      filter(([, isOn]) => isOn),
      map(() => openOverlay())
    )
  );

  playSoundOnOpenOverlay$ = createEffect(() =>
    this.actions$.pipe(
      ofType(openOverlay),
      concatLatestFrom(() => this.store.select(selectIsSoundsOn)),
      filter(([, isOn]) => isOn),
      map(() => playSound({ soundKey: KEY.audio.hey }))
    )
  );

  endGameOnCollectingAllFragments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(closeOverlay),
      concatLatestFrom(() => this.store.select(selectIsEveryFragmentCollected)),
      filter(([, isEveryFragmentCollected]) => isEveryFragmentCollected),
      map(() => gameEnd())
    )
  );

  gameEnd$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(gameEnd),
        tap((a) => console.log('game over'))
      ),
    { dispatch: false }
  );

  playSound$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(playSound),
        map(({ soundKey }) => {
          const audio = AUDIOS.get(soundKey);
          if (!audio) throw new Error('Audio not found: ' + soundKey);
          audio.play();
        })
      ),
    { dispatch: false }
  );
}
