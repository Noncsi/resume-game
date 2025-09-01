import { HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';

const fetchBirdParams = new HttpParams()
  .set('key', 'd94010c1d50775e0b98b74671703fe8ac54e154d')
  .set('query', 'cnt:"=Hungary" grp:"birds" q:">C"'); 

@Injectable()
export class QuizEffects {
  // private actions$ = inject(Actions);
  // private birdApi = inject(BirdApiService);

  // getBird$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getBird),
  //     switchMap((action) => this.birdApi.fetchBirdInfo(fetchBirdParams)),
  //     map((response) => {
  //       const recording = response.recordings[Math.floor(Math.random() * response.recordings.length)];
  //       return getBirdAudio({ recording });
  //     })
  //   )
  // );

  // getBirdAudio$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getBirdAudio),
  //     switchMap((action) =>
  //       this.birdApi
  //         .fetchBirdAudio(action.recording)
  //         .pipe(map((bird: IBird) => getBirdSuccess({ bird })))
  //     )
  //   )
  // );
}
