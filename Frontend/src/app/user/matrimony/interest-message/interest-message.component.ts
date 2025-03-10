import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interest-message',
  templateUrl: './interest-message.component.html',
  styleUrls: ['./interest-message.component.scss']
})
export class InterestMessageComponent {

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.navigate(['/user/matrimony/interest/received/received_all']);
  }
}
