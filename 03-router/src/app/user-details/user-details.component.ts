import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() id: string = ''
  @Input() isActive: string = ''

  ngOnInit(): void {
    console.log("Log from init", this.activatedRoute.snapshot.paramMap.get('id'));

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      console.log("Log from subscription", paramMap.get('id'));
    })
  }


  private readonly activatedRoute = inject(ActivatedRoute);


}
