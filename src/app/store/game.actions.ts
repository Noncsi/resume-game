import { createAction, props } from '@ngrx/store';
import { IInteractableAreaConfig } from '../models/types';

export const openOverlay = createAction('[Game] Open Overlay', props<{ area: IInteractableAreaConfig }>());
export const closeOverlay = createAction('[Game] Close Overlay');
export const setPrompt = createAction('[Game] Set Prompt', props<{ text: string | null }>());
