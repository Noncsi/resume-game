import { createAction, props } from '@ngrx/store';

export const visitArea = createAction('[Game] Visit Area', props<{ area: string }>());
export const collectSkill = createAction('[Game] Collect Skill', props<{ skill: string }>());
export const openProject = createAction('[Game] Open Project', props<{ projectId: string }>());
export const readJob = createAction('[Game] Read Job', props<{ jobId: string }>());
export const reachEnd = createAction('[Game] Reach End');
