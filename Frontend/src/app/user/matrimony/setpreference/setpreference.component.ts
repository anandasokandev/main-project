import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-setpreference',
  templateUrl: './setpreference.component.html',
  styleUrls: ['./setpreference.component.scss'],
})
export class SetpreferenceComponent {
  constructor(private db: DatabaseService, private router: Router) {}

  login_id = localStorage.getItem('loginid');
  public gender: string = '';
  disabilityCategory: any[]=[];
  subDisabilityCategory: any[]=[];

  // Define the filter object for user inputs
  filters = {
    ageFrom: null,
    ageTo: null,
    religion: '',
    caste: '',
    heightFrom: null,
    heightTo: null,
    profession: '',
    complexion: '',
    education: '',
    gender: '',
    district: '',
    maritalstatus: '',
    disabilitycategory: '',
    disabilitysubcategory: '' ,
    login_id: localStorage.getItem('loginid'),
  };

  ngOnInit(): void {

    this.db.fetchUser(this.login_id).then((data: any) => {
      console.log(data[0].gender);
      if (data[0].gender === 'Female') {
        this.filters.gender = 'Male';
      } else {
        this.filters.gender = 'Female';
      }
    });

    this.db.fetchDisabilityCategory().then((data: any) => {
      this.disabilityCategory = data;
    });
  }


  fetchSubCategory(){

    const subcategory_id = this.filters.disabilitycategory;
    this.db.fetchDisabilitySubCategoryById(subcategory_id).then((data: any) => {
      this.subDisabilityCategory = data;
      console.log(data);
      
      if (data.affectedRows === 0) {
        alert('No sub category Found');
      }
    });
  }

  userProfile: boolean = false;

  religions = [
    'Hindu',
    'Muslim',
    'Christian',
    'Sikh',
    'Buddhist',
    'Jain',
    'Zoroastrian (Parsis)',
    'Jewish',
    'Bahai',
    'Others',
  ];
  castes = [
    'General',
    'OBC',
    'SC',
    'ST',
    'EWS',
    'Vokkaliga',
    'Brahmin',
    'Kshatriya',
    'Vaishya',
    'Jat',
    'Maratha',
    'Ezhava',
    'Nair',
    'Mali',
    'Others',
  ];
  professions = [
    'Salaried',
    'Non-salaried',
    'Student',
    'Self-employed',
    'Professional',
    'Home-maker',
    'Retired',
    'Other',
  ];
  complexions = ['Dark', 'Fair', 'Medium', 'Very Fair'];
  educations = ['High School', "Bachelor's Degree", "Master's Degree", 'PhD'];
  districts = [
    'Alappuzha',
    'Ernakulam',
    'Idukki',
    'Kottayam',
    'Kozhikode',
    'Malappuram',
    'Palakkad',
    'Pathanamthitta',
    'Thiruvananthapuram',
    'Thrissur',
    'Wayanad',
    'Kannur',
    'Kasargod',
    'Kollam',
  ];

  profiles = [];

  onSearch() {
    console.log(this.filters);
    
    this.db.fetchPreference(this.login_id).then((data: any) => {
      if (data.message === 'Failed') {
        this.db.createPreference(this.filters).then((data: any) => {
          if (data.message === 'Success') {
            alert('Preference set succesfully');
            this.router.navigate(['/user/matrimony/findpartner']);
          } else {
            alert('Operation failed');
          }
        });
      }
    });
  }
}
