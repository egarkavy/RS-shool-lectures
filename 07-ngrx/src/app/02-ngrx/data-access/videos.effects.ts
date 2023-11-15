import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getVideos, getVideosError, getVideosSuccess } from "./videos.actions";
import { map, switchMap, tap, timer } from "rxjs";

@Injectable()
export class VideosEffects {
    private readonly actions$ = inject(Actions);

    getVideos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getVideos),
            switchMap(() => {
                return timer(2000).pipe(
                    map(() => {
                        // return getVideosError({error: 'can not get videos'})

                        return getVideosSuccess({videos: [
                            {
                                id: '3',
                                name: 'third'
                            }
                        ]})
                    })
                )
            })
        )
    })


    getVideosError$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getVideosError),
            tap(({ error }) => {
                console.log(error);
            }),
            map(() => 1)
        )
    }, { dispatch: false })
}