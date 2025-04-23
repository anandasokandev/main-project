import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.scss']
})
export class MycourseComponent {

  constructor(private db: DatabaseService){}

  login_id = localStorage.getItem('loginid');
  userData: any = []

  ngOnInit(): void {
    this.db.fetchUser(this.login_id).then((data: any)=>{
      console.log(data);
      this.userData = data[0]
    })
  }
  student = {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    dob: '2000-07-15',
    course: 'Computer Science',
    year: 'Final Year',
    courseDetails: `This program equips students with knowledge in software development, networking, databases, and modern web technologies. It focuses on both theory and practical application in real-world projects.`
  };
}
