import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatestWith, map, timer } from 'rxjs';
import { Video } from '../video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosStateService {
  private videos$ = new BehaviorSubject<Video[]>([]);
  private isLoading$ = new BehaviorSubject<boolean>(false);
  private search$ = new BehaviorSubject<string>('');
  
  public filteredVideos$ = this.videos$.pipe(
    combineLatestWith(this.search$),
    map(([videos, search]) => {
      return videos.filter((video) => {
        return video.name.includes(search) 
      })
    })
  )

  public getVideos(): void {
    this.isLoading$.next(true);

    timer(2000).pipe(map(() => {
      return [
        <Video>{
          id: '1',
          name: 'first'
        },
        <Video>{
          id: '2',
          name: 'second'
        }
      ]
    })).subscribe((videos) => {
      this.getVideosSuccess(videos);
    });
  }

  public changeSearch(newSearch: string ): void {
    this.search$.next(newSearch);
  }

  private getVideosSuccess(videos: Video[]): void {
    this.videos$.next(videos);
    this.isLoading$.next(false);
  }
}
