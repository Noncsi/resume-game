import { createReducer, on } from '@ngrx/store';
import * as action from './prompt.actions';
import { ICoordinate } from '../../models/types';

export interface PromptState {
  isPromptVisible: boolean;
  promptPosition: ICoordinate;
}

export const initialPromptState: PromptState = {
  isPromptVisible: false,
  promptPosition: { x: 0, y: 0 },
};

export const promptReducer = createReducer(
  initialPromptState,
  on(action.setPromptPosition, (state, { x, y }) => ({
    ...state,
    promptPosition: { x, y },
  })),
  on(action.showPrompt, (state) => ({
    ...state,
    isPromptVisible: true,
  })),
  on(action.hidePrompt, (state) => ({
    ...state,
    isPromptVisible: false,
  }))
);
