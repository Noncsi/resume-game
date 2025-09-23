import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { IInteractableAreaConfig } from '../models/types';

export interface GameState {
  isOverlayOpen: boolean;
  interactableArea?: IInteractableAreaConfig;
  promptText?: string;
}

export const initialGameState: GameState = {
  isOverlayOpen: false,
  interactableArea: null,
  promptText: "Press [E] to interact",
};

export const gameReducer = createReducer(
  initialGameState,
  on(action.openOverlay, (state, { area }) => ({
    ...state,
    isOverlayOpen: true,
    interactableArea: area,
  })),
  on(action.closeOverlay, (state) => ({
    ...state,
    isOverlayOpen: false,
    interactableArea: null,
  })),
  on(action.setPrompt, (state, { text }) => ({
    ...state,
    promptText: text,
  }))
);
