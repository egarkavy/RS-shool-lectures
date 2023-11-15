import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosStateService } from '../videos-state.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent {
  private readonly videosStateService = inject(VideosStateService);

  public readonly videos$ = this.videosStateService.filteredVideos$;

  public requestVideos(): void {
    this.videosStateService.getVideos();
  }
}
