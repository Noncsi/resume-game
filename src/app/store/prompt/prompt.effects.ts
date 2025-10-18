import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { hidePrompt, setPromptPosition, showPrompt } from './prompt.actions';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { concatLatestFrom } from '@ngrx/operators';
import { setCurrentArea } from '../game/game.actions';
import { selectCurrentArea } from '../game/game.selector';

@Injectable()
export class PromptEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  showPromptOnAreaSet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCurrentArea),
      concatLatestFrom(() => this.store.select(selectCurrentArea)),
      map(([, area]) =>
        !area
          ? hidePrompt()
          : setPromptPosition({ x: area.position.x - 70, y: area.position.y - 60 })
      )
    )
  );

  showPromptAfterSettingPosition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setPromptPosition),
      map(() => showPrompt())
    )
  );
}
