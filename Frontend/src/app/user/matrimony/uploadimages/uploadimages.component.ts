import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';  // Import HttpClient for making requests
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-uploadimages',
  templateUrl: './uploadimages.component.html',
  styleUrls: ['./uploadimages.component.scss']
})
export class UploadimagesComponent {
  selectedFiles: any[] = [];

  constructor(private http: HttpClient, private router: Router, private db: DatabaseService) {}

  ngOnInit(): void {
    const loginId = localStorage.getItem('loginid');

    this.db.fetchImages(loginId).then((data: any)=>{

      console.log(data);
      
      if(data.length > 0){
        this.router.navigate(['/user/matrimony/familydetails'])
      }
    })
  }

  // Handle file selection
  onFileSelected(event: any): void {
    const files = event.target.files;
    this.previewFiles(files);
    console.log(files);
  }

  // Handle drag and drop
  onDragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add('drag-over');
  }

  onDragLeave(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('drag-over');
  }

  onDrop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('drag-over');
    const files = event.dataTransfer.files;
    this.previewFiles(files);
  }

  // Preview selected files
  previewFiles(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFiles.push({ file, preview: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }

  // Remove image from preview
  removeImage(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  // Handle form submission (e.g., uploading images)
  onSubmit(): void {

    const loginId = localStorage.getItem('loginid');

    this.db.fetchImages(loginId).then((data: any)=>{

      console.log(data);
      
      if(data.length > 0){
        this.router.navigate(['/user/matrimony/familydetails'])
      }
    })

    const formData = new FormData();
    

    // Append selected files to formData
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('images', this.selectedFiles[i].file); 
    }

    
    if (loginId) {
    formData.append('loginId', loginId);  // Append loginId to FormData
  } else {
    console.error('loginId is not provided!');
    return;
  }

    this.http.post('http://localhost:3000/uploads',formData).subscribe(
      (response) => {
        console.log('Upload successful', response);
        alert('Image Uploaded Successfully')
        this.router.navigate(['/user/matrimony/familydetails']);
      },
      (error) => {
        console.error('Upload failed', error);
      }
    )

  }
}
