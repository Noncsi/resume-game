import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { IInteractableAreaConfig } from '../models/types';

export interface GameState {
  overlayOpen: boolean;
  interactableArea?: IInteractableAreaConfig;
  promptText?: string;
}

export const initialGameState: GameState = {
  overlayOpen: false,
  interactableArea: null,
  promptText: "Press [E] to interact",
};

export const gameReducer = createReducer(
  initialGameState,
  on(action.openOverlay, (state, { area }) => ({
    ...state,
    overlayOpen: true,
    interactableArea: area,
  })),
  on(action.closeOverlay, (state) => ({
    ...state,
    overlayOpen: false,
    interactableArea: null,
  })),
  on(action.setPrompt, (state, { text }) => ({
    ...state,
    promptText: text,
  }))
);
