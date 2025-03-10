import { Component } from '@angular/core';

@Component({
  selector: 'app-matching-job',
  templateUrl: './matching-job.component.html',
  styleUrls: ['./matching-job.component.scss']
})
export class MatchingJobComponent {
  jobDetails: any = {
    jobTitle: 'Software Engineer',
    jobDescription: `We are looking for a Software Engineer with expertise in building scalable web applications. The ideal candidate should be proficient in Angular, JavaScript, and REST APIs.`,
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field.',
      'At least 3 years of experience in software development.',
      'Proficiency in Angular and RESTful web services.',
      'Good understanding of version control using Git.'
    ],
    salary: '$90,000 - $120,000 per year',
    location: 'New York, USA'
  };

  constructor() { }

  ngOnInit(): void {
    // Additional logic for fetching data or handling state can be added here.
  }

  applyForJob() {
    alert(`You have applied for the job: ${this.jobDetails.jobTitle}`);
  }
}
