import { createAction, props } from "@ngrx/store";
import { Video } from "src/app/video.model";

export const getVideos = createAction('[Videos] getVideos');
export const getVideosSuccess = createAction('[Videos] getVideosSuccess', props<{ videos: Video[] }>());
export const getVideosError = createAction('[Videos] getVideosError', props<{ error: string }>());

export const changeSearch = createAction('[Videos] changeSearch', props<{ newSearch: string }>());