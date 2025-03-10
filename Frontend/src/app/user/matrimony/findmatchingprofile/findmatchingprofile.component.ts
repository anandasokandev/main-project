import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-findmatchingprofile',
  templateUrl: './findmatchingprofile.component.html',
  styleUrls: ['./findmatchingprofile.component.scss'],
})
export class FindmatchingprofileComponent {
  constructor(private db: DatabaseService, private router: Router) {}

  login_id = localStorage.getItem('loginid');
  public gender: string = '';
  public preferenceSet: boolean = false;
  disabilityCategory: any[]=[]
  subDisabilityCategory: any[]=[];

  // Define the filter object for user inputs
  filters = {
    age_from: null,
    age_to: null,
    religion: '',
    caste: '',
    height_from: null,
    height_to: null,
    profession: '',
    complexion: '',
    education: '',
    gender: '',
    district: '',
    maritalstatus: '',
    disability_id: '',
    disabilitysub_id: ''
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

    this.db.fetchPreference(this.login_id).then((data: any) => {
      if (data.message === 'Failed') {
        this.preferenceSet = !this.preferenceSet;
      }
    });

    this.db.fetchDisabilityCategory().then((data: any) => {
      this.disabilityCategory = data;
    });
  }

  fetchSubCategory(){

    const subcategory_id = this.filters.disability_id;
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

  findDefaultPartner() {
    
    this.db.fetchPreference(this.login_id).then((data: any)=>{
      console.log(data);
      
      console.log(data.data[0]);
      this.db.fetchPartner(data.data[0]).then((result: any)=>{

        localStorage.setItem('matrimonyUserData', JSON.stringify(result));
        console.log(result);
        this.db.setMatrimonyData(JSON.stringify(result));
        
        if(result.message === 'Failed'){
          alert(`No results found`);
        }else{
          alert(`${result.length} results found`);
          this.router.navigate(['/user/matrimony/matrimonyusers']);
        }
      })
    })
  }

  onSearch() {
    console.log(this.filters);
    
    this.db.fetchPartner(this.filters).then((data: any) => {
      console.log(data);
      if(data.message === 'Failed'){
        alert(`No results found`);
      }else{
        alert(`${data.length} results found`);
        this.router.navigate(['/user/matrimony/matrimonyusers']);
      }
    });
  }
}
