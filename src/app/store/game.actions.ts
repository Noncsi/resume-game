import { createAction, props } from '@ngrx/store';
import { IInteractableAreaConfig } from '../models/types';
import { Prompt } from '../models/prompt';

export const enterArea = createAction(
  '[Game] Enter Interactable Area',
  props<{ area: IInteractableAreaConfig }>()
);

export const leaveArea = createAction('[Game] Leave Interactable Area');

export const interact = createAction('[Game] Interact');

export const setCurrentArea = createAction(
  '[Game] Set Current Interactable Area',
  props<{ area: IInteractableAreaConfig }>()
);
export const setCurrentAreaSuccess = createAction('[Game] Set Current Interactable Area Success');

export const openOverlay = createAction('[Game] Open Overlay');
export const closeOverlay = createAction('[Game] Close Overlay');

export const setPrompt = createAction('[Game] Set Prompt', props<{ prompt: Prompt }>());
export const showPrompt = createAction('[Game] Show Prompt');
export const hidePrompt = createAction('[Game] Hide Prompt');

export const toggleBackgroundMusic = createAction('[Game] Toggle Background Music');
export const toggleBackgroundMusicSuccess = createAction('[Game] Toggle Background Music Success');
export const toggleBackgroundMusicError = createAction(
  '[Game] Toggle Background Music Error',
  props<{ error: string }>()
);
