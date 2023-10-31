import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-public-user-list',
  templateUrl: './public-user-list.component.html',
  styleUrls: ['./public-user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicUserListComponent {
  public users = ['a', 'b', 'c']
}
