import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-individualprofile',
  templateUrl: './individualprofile.component.html',
  styleUrls: ['./individualprofile.component.scss'],
})
export class IndividualprofileComponent {
  public id: any = '';
  public userId = localStorage.getItem('loginid');
  public user: any[] = [];
  public images: any[] = [];
  public currentIndex: number = 0;
  public preference: boolean = true;
  public userPreference: any[]=[];

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      this.id = data.id;
    });

    this.db.fetchMatrimonyById(this.id).then((data: any) => {
      this.user = data;
    });

    this.db.fetchPreference(this.id).then((data: any) => {
      if (data.message === 'Failed') {
        this.preference = !this.preference;
      }else{
        this.userPreference = data.data;
        console.log(this.userPreference);
        
      }
    });

    this.db.fetchImages(this.id).then((response: any) => {
      if (Array.isArray(response)) {
        // Iterate over the response and extract the `photo_url` from each object
        response.forEach((photo: any) => {
          if (photo && photo.photo_url) {
            // Append only the `photo_url` to the `images` array
            this.images.push(photo.photo_url);
          }
        });
      }
    });
  }

  prev(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  next(): void {
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }

  sendInterest(): void {

    this.db.fetchInterest(this.userId, this.id).then((data: any) => {
      console.log(data.message);
      if(data.message === 'Not Found'){
        this.db.sendInterest({login_id:this.userId, interest_loginid: this.id})
        .then((data: any)=>{
          console.log(data.message);
          if(data.message === 'Success'){
            alert('Interest send successfully');
          }
        })
      }else{
        alert('Interest already exists');
      }
      
    });
  }
}
