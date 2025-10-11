import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

const selectGameState = createFeatureSelector<GameState>('game');

export const selectIsOverlayOpen = createSelector(
  selectGameState,
  (state: GameState) => state.isOverlayOpen
);

export const selectInteractableArea = createSelector(
  selectGameState,
  (state: GameState) => state.currentArea
);

export const selectIsPromptVisible = createSelector(selectGameState, (state: GameState) => state.isPromptVisible);

export const selectIsBackgroundMusicOn = createSelector(selectGameState, (state: GameState) => state.isMusicOn);

export const selectCollectedFragments = createSelector(selectGameState, (state: GameState) => state.collectedFragments);

export const selectCurrentArea = createSelector(selectGameState, (state: GameState) => state.currentArea);
