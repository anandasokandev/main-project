import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  selectedFiles?: FileList
  currentFile?: any;
  message = '';
  filesInfos?: Observable<any>;

  pincodeDetails: any[] = [];
  errorMessage: string = '';
  location: any[] = [];
  state: string = '';
  district: string = '';
  pinCode: string = '';
  userProfileStatus: any[] = [];
  public disabilityCategory: any[] = [];
  public subDisabilityCategory:any []=[];
  login_id = localStorage.getItem('loginid');

  
  constructor(
    private db: DatabaseService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  // Reactive form initialization
  profileForm: FormGroup = this.fb.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    mobile: [''],
    dateofbirth: [''],
    gender: [''],
    pincode: [''],
    state: [''],
    district: [''],
    location: [''],
    disabilitycategory: [''],
    disabilitysubcategory: [''],
    percent: [''],
    profile: [''],
    loginid: localStorage.getItem('loginid'),
  });

  selectFile(event:any):void{
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    
  }

  ngOnInit(): void {
    this.db.fetchDisabilityCategory().then((data: any) => {
      this.disabilityCategory = data;
    });

    
  }

  fetchSubCategory(){
    const subcategory_id = this.profileForm.value.disabilitycategory;
    console.log(subcategory_id);
    this.db.fetchDisabilitySubCategoryById(subcategory_id).then((data: any) => {
      this.subDisabilityCategory = data;
      console.log(this.subDisabilityCategory);
      if (data.affectedRows === 0) {
        alert('No sub category Found');
      }
    });
  }

  // Method to fetch pincode details
  fetchPincode() {
    this.pinCode = this.profileForm.value.pincode;
    console.log('Pincode to search: ', this.pinCode);

    // Reset previous values
    this.pincodeDetails = [];
    this.errorMessage = '';
    this.location = [];
    this.state = '';
    this.district = '';

    this.db
      .fetchPincode(this.pinCode)
      .then((data: any) => {
        if (data && data[0].Status === 'Success') {
          this.pincodeDetails = data[0].PostOffice; // Get post office details

          // Extract first post office data for state and district
          const office = this.pincodeDetails[0];
          this.state = office.Circle; // Assign state (from Circle)
          this.district = office.District || 'Not Available'; // Assign district

          this.profileForm.patchValue({
            state: this.state,
            district: this.district,
          });

          // Populate the location dropdown (PostOffice names)
          this.location = this.pincodeDetails.map(
            (postOffice: any) => postOffice.Name
          );
          console.log(this.location); // Check the populated location names
        } else {
          this.errorMessage = 'No details found for the entered pincode.';
        }
      })
      .catch((error) => {
        console.error('Error fetching pincode details:', error);
        this.errorMessage = 'Error fetching pincode details.';
      });
  }


  // Method to handle form submission
  createProfile() {
    console.log('Form submitted:', this.profileForm.value);
    if(this.selectedFiles) {
      console.log(this.selectedFiles.item(0));
      const file: File | null = this.selectedFiles.item(0);
      if(file) {
        this.currentFile = file;
        this.db.upload(this.currentFile).subscribe((event: any)=>{
          this.message = event.body.message;
        })
      }
      
    }
    this.profileForm.value.profile=this.currentFile.name;
    this.db.createUserProfile(this.profileForm.value).then((data: any) => {
      if (data && data.message === 'Success') {
        alert('User Profile Created Successfully');
        this.db.fetchUserCategory(this.login_id).then((data: any)=>{
          console.log(data.user_category);
          
          if(data.user_category === null){
            this.router.navigate(['/user/usercategory'])
          }else{
            this.router.navigate(['/user/dashboard']);
          }
        })
        
      } else {
        alert('User profile creation failed');
      }
    });
  }
}
