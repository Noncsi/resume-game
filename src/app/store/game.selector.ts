import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

const selectGameState = createFeatureSelector<GameState>('game');

export const selectOverlayOpen = createSelector(
  selectGameState,
  (state: GameState) => state.overlayOpen
);
export const selectOverlayPayload = createSelector(
  selectGameState,
  (state: GameState) => state.interactableArea
);
export const selectPromptText = createSelector(
  selectGameState,
  (state: GameState) => state.promptText
);
