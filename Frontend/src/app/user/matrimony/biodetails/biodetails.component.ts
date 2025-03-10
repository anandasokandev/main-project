import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-biodetails',
  templateUrl: './biodetails.component.html',
  styleUrls: ['./biodetails.component.scss'],
})
export class BiodetailsComponent {
  constructor(
    private db: DatabaseService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  bioForm = this.fb.group({
    shortbio: [],
    aboutme: [],
    login_id: localStorage.getItem('loginid'),
  });

  ngOnInit(): void {
    const login_id = localStorage.getItem('loginid');
    this.db.fetchBioDetails(login_id).then((data: any)=>{
      if(data.message === 'Already exists'){
        this.router.navigate(['/user/dashboard']);
      }
    })
  }

  createBio() {
    this.db.createBioDetails(this.bioForm.value).then((data: any) => {
      if (data.message === 'Success') {
        alert('Details inserted sucessfully');
        this.router.navigate(['/user/dashboard']);
      } else {
        alert('Failed');
      }
    });
  }
}
