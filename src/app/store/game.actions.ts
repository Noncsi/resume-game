import { createAction, props } from '@ngrx/store';
import { IInteractableAreaConfig } from '../models/types';
import { Prompt } from '../models/prompt';

export const setCurrentInteractableArea = createAction(
  '[Game] Set Interactable Area',
  props<{ area: IInteractableAreaConfig }>()
);

export const openOverlay = createAction('[Game] Open Overlay');
export const closeOverlay = createAction('[Game] Close Overlay');

export const setPrompt = createAction('[Game] Set Prompt', props<{ prompt: Prompt }>());
export const showPrompt = createAction('[Game] Show Prompt', props<{ x: number; y: number }>());
export const hidePrompt = createAction('[Game] Hide Prompt');

export const toggleBackgroundMusic = createAction('[Game] Turn Background Music On/Off');
export const toggleBackgroundMusicSuccess = createAction('[Game] Turn Background Music On/Off Success');
