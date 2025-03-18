import { Component } from "@angular/core";
import { DatabaseService } from "src/app/database.service";

interface UserProfile {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  district: string;
  location: string;
  pincode: string;
  address: string;
  profile: string;
  state: string;
}

@Component({
  selector: 'app-view-editprofile',
  templateUrl: './view-editprofile.component.html',
  styleUrls: ['./view-editprofile.component.scss']
})

export class ViewEditprofileComponent {
  login_id = localStorage.getItem('loginid');
  isEditable: boolean = false;
  user: UserProfile = {} as UserProfile; // Ensuring the user object follows UserProfile
  pincodeDetails: any[] = [];
  location: string[] = [];

  filter: UserProfile = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    district: '',
    location: '',
    pincode: '',
    address: '',
    profile: '',
    state: ''
  };

  constructor(private db: DatabaseService) {
    
  }

  ngOnInit() {
    this.db.fetchUser(this.login_id).then((data: any) => {
      console.log(data[0]);
      this.filter = {
        firstName: data[0].first_name,
        lastName: data[0].last_name,
        phone: data[0].phone,
        email: data[0].email,
        district: data[0].district,
        location: data[0].location, // Assuming this is a string
        pincode: data[0].pincode,
        address: data[0].address,
        profile: data[0].profile_pic,
        state: data[0].state
      };
      this.location = data[0].location ? [data[0].location] : [];
    });
  }

  fetchPincode() {
    const pinCode = this.filter.pincode;
    console.log('Pincode to search: ', pinCode);

    this.pincodeDetails = [];
    this.filter.district = '';
    this.filter.state = '';

    this.db.fetchPincode(pinCode).then((data: any) => {
      if (data && data[0].Status === 'Success') {
        this.pincodeDetails = data[0].PostOffice; // Get post office details

        // Extract first post office data for state and district
        const office = this.pincodeDetails[0];
        this.filter.state = office.Circle; // Assign state (from Circle)
        this.filter.district = office.District || 'Not Available'; // Assign district

        // Populate the location dropdown (PostOffice names)
        this.location = this.pincodeDetails.map((postOffice: any) => postOffice.Name);
        console.log(this.location); // Check the populated location names
      }
    }).catch((error: any) => {
      console.error('Error fetching pincode details:', error);
    });
  }

  onSave() {
    console.log('Saving updated profile:', this.filter);
    // You can send the `filter` object to the server to update the user's profile
    // this.db.updateUserProfile(this.filter).then(response => {
    //   console.log('Profile updated successfully:', response);
    // }).catch(error => {
    //   console.error('Error updating profile:', error);
    // });
  }

  editProfile() {
    this.isEditable = true;
    console.log('Editing profile:', this.isEditable);
  }
}
