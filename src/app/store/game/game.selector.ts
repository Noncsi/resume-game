import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

const selectGameState = createFeatureSelector<GameState>('game');

export const selectIsOverlayOpen = createSelector(
  selectGameState,
  (state: GameState) => state.isOverlayOpen
);

export const selectCurrentArea = createSelector(
  selectGameState,
  (state: GameState) => state.currentArea
);

export const selectIsPromptVisible = createSelector(
  selectGameState,
  (state: GameState) => state.isPromptVisible
);

export const selectPromptPosition = createSelector(
  selectGameState,
  (state: GameState) => state.promptPosition
);

export const selectIsMusicOn = createSelector(
  selectGameState,
  (state: GameState) => state.isMusicOn
);
export const selectIsSoundsOn = createSelector(
  selectGameState,
  (state: GameState) => state.isSoundOn
);

export const selectCollectedFragments = createSelector(
  selectGameState,
  (state: GameState) => state.collectibleFragments
);

export const selectIsEveryFragmentCollected = createSelector(
  selectCollectedFragments,
  (collectibleFragments) => {
    return collectibleFragments.every((fragment) => fragment.isCollected);
  }
);

export const selectIsGameEnded = createSelector(
  selectGameState,
  (state: GameState) => state.isGameEnded
);
