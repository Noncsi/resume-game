import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { IInteractableAreaConfig } from '../models/types';
import { Prompt } from '../models/interaction-prompt';

export interface GameState {
  isOverlayOpen: boolean;
  interactableArea?: IInteractableAreaConfig;
  isPromptVisible: boolean;
  prompt?: Prompt;
}

export const initialGameState: GameState = {
  isOverlayOpen: false,
  interactableArea: null,
  isPromptVisible: false,
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
  on(action.setPrompt, (state, { prompt }) => ({
    ...state,
    prompt,
  })),
  on(action.showPrompt, (state, { x, y }) => ({
    ...state,
    x,
    y,
    isPromptVisible: true
  })),
  on(action.hidePrompt, (state) => ({
    ...state,
    isPromptVisible: false
  }))
);
