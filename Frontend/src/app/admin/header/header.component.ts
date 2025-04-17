import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public login_id: any = ''

  constructor(private router: Router, private db: DatabaseService) { }

  ngOnInit(): void {
    this.login_id = localStorage.getItem('loginid');
    if(!this.login_id){
      alert('Login to continue');
      this.router.navigate(['/guest/login'])
    }
  }

  // Scroll Event Listener to toggle 'scrolled' class
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');

    if (!selectHeader || !selectBody) return;

    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;

    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
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

  logout(){
    this.db.logout();
  }
}
