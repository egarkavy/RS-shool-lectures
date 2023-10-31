import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-private-user-card',
  templateUrl: './private-user-card.component.html',
  styleUrls: ['./private-user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateUserCardComponent {
  @Input() user: string = ''
}
