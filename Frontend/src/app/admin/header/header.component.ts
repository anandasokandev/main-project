import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Track the state of each dropdown
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
