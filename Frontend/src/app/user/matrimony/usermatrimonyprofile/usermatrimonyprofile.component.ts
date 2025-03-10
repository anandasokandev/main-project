import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-usermatrimonyprofile',
  templateUrl: './usermatrimonyprofile.component.html',
  styleUrls: ['./usermatrimonyprofile.component.scss'],
})
export class UsermatrimonyprofileComponent implements OnInit {
  details: any[] = [];
  login_id: string = '';
  user_id = localStorage.getItem('loginid');
  name: string  = ''
  selectedMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve stored data from localStorage
    const storedData = localStorage.getItem('matrimonyUserData');
  
    if (storedData) {
      this.details = JSON.parse(storedData);
      console.log(this.details);

      if (this.details && this.details[0].login_id) {
        this.login_id = this.details[0].login_id;
      } else {
        console.log('login_id not found in stored data');
      }
    } 
    else {
      console.log('No matrimony data found in localStorage');
    }
  }  

   isModalOpen: boolean = false; // Controls visibility of the modal

   // Open the modal
   openModal(first_name: string,last_name: string, login_id: string): void {
     this.isModalOpen = true;
     this.name = first_name+' '+last_name;
     this.login_id = login_id;
   }
 
   // Close the modal
   closeModal(): void {
     this.isModalOpen = false;
   }
 


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

    sendInterestMessage(): void {
      const details = {
        login_id: this.user_id,
        interest_loginid: this.login_id,
        selectedMessage: this.selectedMessage
      };
    
      if (this.selectedMessage) {
        console.log('Sending message: ', this.selectedMessage);
        
        this.db.fetchInterest(this.user_id, this.login_id).then((data: any) => {
          console.log(data);
          
          if (data.message === 'Not Found') {
            this.db.sendInterest(details).then((result: any) => {
              if (result.message === 'Success') {
                alert('Interest sent successfully');
                this.closeModal();
              } else {
                alert('Failed to send interest');
              }
            }).catch((error: any) => {
              console.error('Error sending interest:', error);
              alert('An error occurred while sending the interest.');
            });
          } else {
            alert('Existing interest found');
          }
        }).catch((error: any) => {
          console.error('Error fetching interest:', error);
          alert('An error occurred while checking the interest.');
        });
      } else {
        alert('Please select a message before sending.');
      }
    }
    

    viewProfile(login_id: any){
      this.router.navigate(['/user/matrimony/individualprofile'],{ queryParams: {id: login_id }})
    }
}
 