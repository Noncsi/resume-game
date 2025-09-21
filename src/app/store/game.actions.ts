import { createAction, props } from '@ngrx/store';
import { OverlayPayload } from './game.reducer';

export const openOverlay = createAction('[Game] Open Overlay', props<{ payload: OverlayPayload }>());
export const closeOverlay = createAction('[Game] Close Overlay');
export const setPrompt = createAction('[Game] Set Prompt', props<{ text: string | null }>());
