import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  login_id = localStorage.getItem('loginid');
  userCategory: any = '';
  education: boolean = false;
  role: any = '';
  matrimonyProfile: boolean = true;
  preference: boolean = false
  profile: boolean = false

  constructor(private db: DatabaseService, private router: Router) {}

  dropdownStates: { [key: string]: boolean } = {
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
  };

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {
    
    if (!this.login_id) {
      alert('Login to continue');
      this.router.navigate(['/guest/login']);
    }

    this.db.fetchBioDetails(this.login_id).then((data: any) => {
      if (data.message === 'Not Found') {
        this.profile = !this.profile;
      }
    });

    this.db.fetchPreference(this.login_id).then((data:any)=>{
      if(data.message === 'Success'){
        this.preference = !this.preference;
      }
    })

    this.role = localStorage.getItem('role');

    this.db.fetchUserCategory(this.login_id).then((data: any) => {
      this.userCategory = data.user_category;
      console.log(`User category is ${data.user_category}`);
    });

    this.db.fetchMatrimonyProfile(this.login_id).then((data: any) => {
      if (data.message === 'Profile Found') {
        this.matrimonyProfile = !this.matrimonyProfile;
      }
    });

  }

  viewPreference(){
    
  }

  viewProfile(){
    this.router.navigate(['/user/matrimony/individualprofile'], { queryParams: {id: this.login_id}})
  }

  // Scroll Event Listener to toggle 'scrolled' class
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');

    if (!selectHeader || !selectBody) return;

    if (
      !selectHeader.classList.contains('scroll-up-sticky') &&
      !selectHeader.classList.contains('sticky-top') &&
      !selectHeader.classList.contains('fixed-top')
    )
      return;

    window.scrollY > 100
      ? selectBody.classList.add('scrolled')
      : selectBody.classList.remove('scrolled');
  }

  // Mobile Navigation Toggle
  toggleMobileNav() {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const body = document.querySelector('body');

    if (mobileNavToggleBtn && body) {
      body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }

  // Toggle Dropdown on Click
  toggleDropdown(event: Event) {
    const target = event.target as HTMLElement;
    const parent = target?.parentElement;

    if (parent) {
      parent.classList.toggle('active');
      const dropdown = parent.nextElementSibling;
      if (dropdown) {
        dropdown.classList.toggle('dropdown-active');
      }
      event.stopImmediatePropagation();
    }
  }

  // Close Mobile Nav on clicking links
  closeMobileNavOnLinkClick() {
    const body = document.querySelector('body');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    if (body && mobileNavToggleBtn) {
      body.classList.remove('mobile-nav-active');
      mobileNavToggleBtn.classList.remove('bi-x');
      mobileNavToggleBtn.classList.add('bi-list');
    }
  }

  logout() {
    this.db.logout();
  }
}
