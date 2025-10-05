import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { IInteractableAreaConfig } from '../models/types';
import { Prompt } from '../models/interaction-prompt';

export interface GameState {
  isOverlayOpen: boolean;
  currentArea: IInteractableAreaConfig;
  isPromptVisible: boolean;
  prompt?: Prompt;
}

export const initialGameState: GameState = {
  isOverlayOpen: false,
  currentArea: null,
  isPromptVisible: false,
};

export const gameReducer = createReducer(
  initialGameState,
  on(action.setCurrentInteractableArea, (state, { area }) => ({
    ...state,
    currentArea: area,
  })),
  on(action.openOverlay, (state) => ({
    ...state,
    isOverlayOpen: true,
  })),
  on(action.closeOverlay, (state) => ({
    ...state,
    isOverlayOpen: false,
    currentArea: null,
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
