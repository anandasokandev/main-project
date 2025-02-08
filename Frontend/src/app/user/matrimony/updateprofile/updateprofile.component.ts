import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent {

  constructor(private db: DatabaseService, private fb:FormBuilder){}

  profileForm = this.fb.group({
    
  })

  onSubmit(){

  }
}
