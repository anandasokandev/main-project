import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  login_id = localStorage.getItem('loginid');
  userCategory:any = ''
  education: boolean = false
  role: any  = ''

  constructor(private db: DatabaseService){}


  dropdownStates: { [key: string]: boolean } = {
    dropdown1: false, // Controls dropdown state
    dropdown2: false, // Another dropdown
    dropdown3: false,
    dropdown4: false // Settings dropdown state
  };

  navbarOpen = false

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {

    this.role = localStorage.getItem('role');

    this.db.fetchUserCategory(this.login_id).then((data: any)=>{
      this.userCategory = data;
      console.log(data);
    })
  }
  // General toggle for individual dropdowns
  toggleDropdown(dropdown: string) {
    // Close all dropdowns first
    for (const key in this.dropdownStates) {
      if (this.dropdownStates.hasOwnProperty(key)) {
        this.dropdownStates[key] = false;
        this.dropdownStates['dropdown3']=!this.dropdownStates['dropdown3'];
      }
    }

    // Toggle the clicked dropdown
    this.dropdownStates[dropdown] = !this.dropdownStates[dropdown];
    
  }
}
