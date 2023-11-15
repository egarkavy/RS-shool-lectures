import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosStateService } from '../videos-state.service';
import { Store } from '@ngrx/store';
import { selectFilteredVideos, selectVideos, videosFeature } from '../data-access/videos.selectors';
import { getVideos } from '../data-access/videos.actions';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent {
  private readonly globalStore = inject(Store);

  public readonly videos$ = this.globalStore.select(selectFilteredVideos);

  public requestVideos(): void {
    this.globalStore.dispatch(getVideos());
  }
}
