import { createReducer, on } from "@ngrx/store";
import { VideosState, initialState } from "./videos.state";
import { changeSearch, getVideos, getVideosSuccess } from "./videos.actions";

export const videosReducer = createReducer<VideosState>(initialState, 
        on(getVideos, (state) => {
            return {
                ...state,
                isLoading: true
            };
        }),
        on(getVideosSuccess, (state, { videos }) => {
            return {
                ...state,
                isLoading: false,
                videos
            };
        }),
        on(changeSearch, (state, { newSearch }) => {
            return {
                ...state,
                search: newSearch
            };
        })
    );