import { createReducer, on } from '@ngrx/store';
import * as action from './game.actions';

export interface GameState {
  visitedAreas: string[];
  collectedSkills: string[];
  openedProjects: string[];
  readJobs: string[];
  endReached: boolean;
}

export const initialState: GameState = {
  visitedAreas: [],
  collectedSkills: [],
  openedProjects: [],
  readJobs: [],
  endReached: false
};

export const gameReducer = createReducer(
  initialState,
  on(action.visitArea, (state, { area }) => ({
    ...state,
    visitedAreas: [...new Set([...state.visitedAreas, area])],
  })),
  on(action.collectSkill, (state, { skill }) => ({
    ...state,
    collectedSkills: [...new Set([...state.collectedSkills, skill])],
  })),
  on(action.openProject, (state, { projectId }) => ({
    ...state,
    openedProjects: [...new Set([...state.openedProjects, projectId])],
  })),
  on(action.readJob, (state, { jobId }) => ({
    ...state,
    readJobs: [...new Set([...state.readJobs, jobId])],
  })),
  on(action.reachEnd, (state) => ({
    ...state,
    endReached: true,
  }))
);