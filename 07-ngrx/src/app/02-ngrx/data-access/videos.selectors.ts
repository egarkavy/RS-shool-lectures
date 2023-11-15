import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VideosState } from "./videos.state";

export const videosFeature = createFeatureSelector<VideosState>('videos');

export const selectVideos = createSelector(videosFeature, (state: VideosState) => {
    return state.videos
});

export const selectSearch = createSelector(videosFeature, (state: VideosState) => {
    return state.search
});

export const selectFilteredVideos = createSelector(selectVideos, selectSearch, (videos, search) => {
    return videos.filter((video) => video.name.includes(search))
});