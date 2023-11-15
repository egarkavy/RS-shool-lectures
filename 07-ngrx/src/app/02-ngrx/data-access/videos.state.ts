import { Video } from "src/app/video.model";

export interface VideosState {
    videos: Video[],
    isLoading: boolean,
    search: string;
}

export const initialState: VideosState = {
    isLoading: false,
    search: '',
    videos: [{
        id: '-1',
        name: 'minus one'
    }]
}