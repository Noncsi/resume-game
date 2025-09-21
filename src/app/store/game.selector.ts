import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';
import { gameFeatureKey } from './game.reducer';

const selectGameFeature = createFeatureSelector<GameState>(gameFeatureKey);

export const selectOverlayOpen = createSelector(selectGameFeature, s => s.overlayOpen);
export const selectOverlayPayload = createSelector(selectGameFeature, s => s.overlayPayload);
export const selectPromptText = createSelector(selectGameFeature, s => s.promptText);
