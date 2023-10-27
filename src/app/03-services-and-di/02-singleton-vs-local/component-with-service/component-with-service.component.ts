import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SingletonService } from '../singleton.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-component-with-service',
  templateUrl: './component-with-service.component.html',
  styleUrls: ['./component-with-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LocalService //This is how to make a service. All children of this component will also have an access to this service
  ]
})
export class ComponentWithServiceComponent implements OnInit {
  @Input({ required: true }) serviceStateOverride = '';

  constructor(public readonly singletonService: SingletonService, public readonly localService: LocalService) {}
  
  public ngOnInit(): void {
    this.singletonService.serviceState = this.serviceStateOverride;
    this.localService.serviceState = this.serviceStateOverride;
  }

}
