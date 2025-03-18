import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewuserprofile',
  templateUrl: './viewuserprofile.component.html',
  styleUrls: ['./viewuserprofile.component.scss']
})
export class ViewuserprofileComponent implements OnInit {

  userProfile: any[] = [];
  noResult: boolean = true; // Initially, we assume results will be found.
  
  filteredProfiles: any = {
    searchQuery: '',
    genderFilter: '',
    startDate: '',
    endDate: ''
  };

  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    
  }

  applyFilters(): void {
    console.log('Applying filters:', this.filteredProfiles);
    this.db.fetchMatrimonyUserProfile(this.filteredProfiles).then((data: any) => {
      console.log('Fetched data:', data);
      
      if (data.message === 'Records retrieved successfully') {
        this.userProfile = data.data; // Assign the fetched data to userProfile
        this.noResult = false // Check if there are no results
      } else {
        this.noResult = true;
        this.userProfile = [];
      }
    }).catch((error) => {
      console.error('Error fetching user profiles:', error);
      this.noResult = true; // Show no result in case of error
      this.userProfile = [];
    });
  }

  viewProfile(login_id: any){
    this.router.navigate(['/admin/matrimony/viewindividualprofile'],{queryParams: {id: login_id }})
  }

}
