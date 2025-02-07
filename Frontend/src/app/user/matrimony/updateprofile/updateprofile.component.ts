import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent {

  
  constructor(private db: DatabaseService){}

  onSubmit(){

  }
}
