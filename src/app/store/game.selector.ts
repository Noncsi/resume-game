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

export const selectPrompt = createSelector(selectGameState, (state: GameState) => state.prompt);

export const selectIsPromptVisible = createSelector(selectGameState, (state: GameState) => state.isPromptVisible);

// export const selectPromptPosition = createSelector(selectPrompt, (prompt: Prompt) => {
//   prompt?.text.x, prompt?.text.y;
// });
