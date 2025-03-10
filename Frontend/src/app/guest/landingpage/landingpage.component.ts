import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialize any logic on component load, if necessary
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
}
