import { createAction, props } from '@ngrx/store';
import { IInteractableAreaConfig } from '../../models/types';

export const setCurrentArea = createAction(
  '[Game] Set Current Interactable Area',
  props<{ area: IInteractableAreaConfig }>()
);

export const interact = createAction('[Game] Interact');

export const openOverlay = createAction('[Game] Open Overlay');
export const closeOverlay = createAction('[Game] Close Overlay');

export const toggleMusic = createAction('[Game] Toggle Background Music');
export const toggleMusicSuccess = createAction('[Game] Toggle Background Music Success');
export const toggleMusicError = createAction(
  '[Game] Toggle Background Music Error',
  props<{ error: string }>()
);

export const toggleSounds = createAction('[Game] Toggle Background Sounds');
export const toggleSoundsSuccess = createAction('[Game] Toggle Background Sounds Success');
export const toggleSoundsError = createAction(
  '[Game] Toggle Background Sounds Error',
  props<{ error: string }>()
);

export const playSound = createAction('[Game] Play Sound', props<{ soundKey: string }>());

export const gameEnd = createAction('[Game] Game end');
export const showCongratulations = createAction('[Game] Show Congratulations');
export const hideCongratulations = createAction('[Game] Hide Congratulations');
