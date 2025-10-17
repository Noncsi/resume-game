import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PromptState } from './prompt.reducer';

const selectPromptState = createFeatureSelector<PromptState>('prompt');

export const selectIsPromptVisible = createSelector(
  selectPromptState,
  (state: PromptState) => state.isPromptVisible
);

export const selectPromptPosition = createSelector(
  selectPromptState,
  (state: PromptState) => state.promptPosition
);
