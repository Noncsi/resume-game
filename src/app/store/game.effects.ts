import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameService } from '../services/game-service';
import { toggleBackgroundMusic } from './game.actions';
import { switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsBackgroundMusicOn } from './game.selector';
import { AUDIOS } from '../models/collections';
import { KEY } from '../models/keys';
import { concatLatestFrom } from '@ngrx/operators';

@Injectable()
export class GameEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  toggleBackgroundMusic$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(toggleBackgroundMusic),
        concatLatestFrom(() => this.store.select(selectIsBackgroundMusicOn)),
        tap(([, isOn]) => {
          const backgroundMusic = AUDIOS.get(KEY.audio.backgroundMusic);
          isOn ? backgroundMusic.play() : backgroundMusic.stop();
        })
      ),
    { dispatch: false }
  );
}
