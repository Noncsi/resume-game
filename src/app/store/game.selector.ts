import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GameState } from "./game.reducer";

export const gameState = createFeatureSelector<GameState>('quiz');

// export const selectBird = createSelector(
//     quizState,
//     (state: AppState) => state?.bird
// );

// export const selectBirdName = createSelector(
//     selectBird,
//     (bird: IBird | null) => bird?.scientificName
// );

