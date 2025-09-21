import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';

export interface OverlayPayload {
  title: string;
  content: string; // can be plain text or HTML-safe string
  links?: { label: string; href: string }[];
}

export interface GameState {
  overlayOpen: boolean;
  overlayPayload?: OverlayPayload;
  promptText?: string; // the "Press [E] to interact" prompt text
}

export const initialGameState: GameState = {
  overlayOpen: false,
  overlayPayload: null,
  promptText: null,
};


export const gameFeatureKey = 'game';

export const gameReducer = createReducer(
  initialGameState,
  on(action.openOverlay, (state, { payload }) => ({
    ...state,
    overlayOpen: true,
    overlayPayload: payload,
  })),
  on(action.closeOverlay, (state) => ({
    ...state,
    overlayOpen: false,
    overlayPayload: null,
  })),
  on(action.setPrompt, (state, { text }) => ({
    ...state,
    promptText: text,
  }))
);
