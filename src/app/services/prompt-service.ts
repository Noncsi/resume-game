import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICoordinate, Text } from '../models/types';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { selectIsPromptVisible, selectPromptPosition } from '../store/prompt/prompt.selector';

@Injectable({ providedIn: 'root' })
export class PromptService {
  private prompt: Text;
  private store = inject(Store);

  constructor() {
    this.store
      .select(selectIsPromptVisible)
      .pipe(
        tap((isVisible: boolean) => this.prompt?.setVisible(isVisible)),
        takeUntilDestroyed()
      )
      .subscribe();

    this.store
      .select(selectPromptPosition)
      .pipe(
        tap((position: ICoordinate) => this.prompt?.setPosition(position.x, position.y)),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  setPrompt(prompt: Text): void {
    this.prompt = prompt;
  }
}
