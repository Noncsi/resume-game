import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { ICVFragment, IInteractableAreaConfig } from '../models/types';
import { INTERACTABLE_AREA_CONFIGS } from '../config/interactable-areas';

export interface GameState {
  isMusicOn: boolean;
  isSoundOn: boolean;
  currentArea: IInteractableAreaConfig;
  isOverlayOpen: boolean;
  isPromptVisible: boolean;
  collectibleFragments: ICVFragment[];
  isGameEnded?: boolean;
}

export const initialGameState: GameState = {
  isMusicOn: true,
  isSoundOn: true,
  currentArea: null,
  isOverlayOpen: false,
  isPromptVisible: false,
  collectibleFragments: INTERACTABLE_AREA_CONFIGS.filter((area) => area.containsCVFragment).map(
    (area) => ({ areaKey: area.key, isCollected: false } as ICVFragment)
  ),
  isGameEnded: false,
};

export const gameReducer = createReducer(
  initialGameState,
  on(action.enterArea, (state, { area }) => ({
    ...state,
    currentArea: area,
  })),
  on(action.leaveArea, (state) => ({
    ...state,
    currentArea: null,
  })),
  on(action.openOverlay, (state) => ({
    ...state,
    isOverlayOpen: true,
    collectibleFragments: state.collectibleFragments.map((fragment) =>
      fragment.areaKey === state.currentArea?.key
        ? { ...fragment, isCollected: true }
        : fragment,
    ),
  })),
  on(action.closeOverlay, (state) => ({
    ...state,
    isOverlayOpen: false,
  })),
  on(action.showPrompt, (state) => ({
    ...state,
    isPromptVisible: true,
  })),
  on(action.hidePrompt, (state) => ({
    ...state,
    isPromptVisible: false,
  })),
  on(action.toggleMusicSuccess, (state) => ({
    ...state,
    isMusicOn: !state.isMusicOn,
  })),
  on(action.toggleSoundsSuccess, (state) => ({
    ...state,
    isSoundOn: !state.isSoundOn,
  })),
  on(action.openOverlay, (state) => ({
    ...state,
    collectibleFragments: state.collectibleFragments.map((fragment) =>
      fragment.areaKey === state.currentArea?.key ? { ...fragment, isCollected: true } : fragment
    ),
  })),
  on(action.gameEnd, (state) => ({
    ...state,
    isGameEnded: true,
    currentArea: null,
  }))
);
