import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, LoginComponent, UserInfoComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {

}
