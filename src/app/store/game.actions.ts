import { createAction, props } from '@ngrx/store';
import { IInteractableAreaConfig } from '../models/types';
import { Prompt } from '../models/interaction-prompt';

export const openOverlay = createAction(
  '[Game] Open Overlay',
  props<{ area: IInteractableAreaConfig }>()
);
export const closeOverlay = createAction('[Game] Close Overlay');

export const setPrompt = createAction('[Game] Set Prompt', props<{ prompt: Prompt }>());
export const showPrompt = createAction(
  '[Game] Show Prompt',
  props<{ x: number; y: number }>()
);

export const hidePrompt = createAction('[Game] Hide Prompt');
