import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { VideosStateService } from '../videos-state.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  private readonly videosStateService = inject(VideosStateService);

  searchControl = new FormControl('',{ nonNullable: true });

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((newSearch) => {
      this.videosStateService.changeSearch(newSearch);
    })
  }
}
