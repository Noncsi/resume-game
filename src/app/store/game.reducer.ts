import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { ICVFragment, IInteractableAreaConfig } from '../models/types';
import { KEY } from '../models/keys';

export interface GameState {
  isMusicOn: boolean;
  isSoundEffectsOn: boolean;
  currentArea: IInteractableAreaConfig;
  isOverlayOpen: boolean;
  isPromptVisible: boolean;
  collectibleFragments: ICVFragment[];
}

export const initialGameState: GameState = {
  isMusicOn: false,
  isSoundEffectsOn: true,
  currentArea: null,
  isOverlayOpen: false,
  isPromptVisible: false,
  collectibleFragments: Object.keys(KEY.area).map(
    (areaKey) => ({ areaKey, isCollected: false } as ICVFragment)
  ),
};

export const gameReducer = createReducer(
  initialGameState,
  on(action.enterArea, (state, { area }) => ({
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
  on(action.showPrompt, (state) => ({
    ...state,
    isPromptVisible: true,    
  })),
  on(action.hidePrompt, (state) => ({
    ...state,
    isPromptVisible: false,
  })),
  on(action.toggleBackgroundMusicSuccess, (state) => ({
    ...state,
    isMusicOn: !state.isMusicOn,
  })),
    on(action.openOverlay, (state) => ({
    ...state,
    collectibleFragments: state.collectibleFragments.map((fragment) =>
      fragment.areaKey === state.currentArea?.key ? { ...fragment, isCollected: true } : fragment
    ),
  }))
);
