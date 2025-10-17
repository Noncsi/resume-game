import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { ICoordinate, ICVFragment, IInteractableAreaConfig } from '../../models/types';
import { INTERACTABLE_AREA_CONFIGS } from '../../config/interactable-areas';

export interface GameState {
  isMusicOn: boolean;
  isSoundOn: boolean;
  currentArea: IInteractableAreaConfig;
  isOverlayOpen: boolean;
  isPromptVisible: boolean;
  promptPosition: ICoordinate;
  collectibleFragments: ICVFragment[];
  isGameEnded?: boolean;
}

export const initialGameState: GameState = {
  isMusicOn: true,
  isSoundOn: true,
  currentArea: null,
  isOverlayOpen: false,
  isPromptVisible: false,
  promptPosition: { x: 0, y: 0 },
  collectibleFragments: INTERACTABLE_AREA_CONFIGS.filter((area) => area.containsCVFragment).map(
    (area) => ({ areaKey: area.key, isCollected: false } as ICVFragment)
  ),
  isGameEnded: false,
};

export const gameReducer = createReducer(
  initialGameState,
  on(action.setCurrentArea, (state, { area }) => ({
    ...state,
    currentArea: area,
  })),
  on(action.openOverlay, (state) => ({
    ...state,
    isOverlayOpen: true,
    collectibleFragments: state.collectibleFragments.map((fragment) =>
      fragment.areaKey === state.currentArea?.key ? { ...fragment, isCollected: true } : fragment
    ),
  })),
  on(action.closeOverlay, (state) => ({
    ...state,
    isOverlayOpen: false,
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
