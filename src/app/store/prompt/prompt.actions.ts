import { createAction, props } from '@ngrx/store';

export const setPromptPosition = createAction(
  '[Prompt] Set Prompt Position',
  props<{ x: number; y: number }>()
);
export const showPrompt = createAction('[Prompt] Show Prompt');
export const hidePrompt = createAction('[Prompt] Hide Prompt');
