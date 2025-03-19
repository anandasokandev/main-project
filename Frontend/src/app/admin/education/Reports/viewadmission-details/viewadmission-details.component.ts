import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-viewadmission-details',
  templateUrl: './viewadmission-details.component.html',
  styleUrls: ['./viewadmission-details.component.scss']
})
export class ViewadmissionDetailsComponent {
@ViewChild('TABLE', { static: false }) TABLE!: ElementRef;

  constructor(private db: DatabaseService) {}

  users: any[] = [];
  number: boolean = false;
  title = 'Excel';
  course: any[] = [];
  disabilityCategory: any[] = [];
  subcategory: any[] = [];

  ngOnInit(): void {
    this.fetchCourse();
    this.fetchDisability();
  }

  filter = {
    course: '',
    endDate: '',
    startDate: '',
    status: '',
    disabilityCategory: '',
    disabilitySubCategory: '',
  };

  keralaDistricts: string[] = [
    'Thiruvananthapuram',
    'Kollam',
    'Pathanamthitta',
    'Alappuzha',
    'Kottayam',
    'Idukki',
    'Ernakulam',
    'Thrissur',
    'Palakkad',
    'Malappuram',
    'Kozhikode',
    'Wayanad',
    'Kannur',
    'Kasaragod',
  ];

  fetchUser() {
    console.log(this.filter);
    this.db.admissionReports(this.filter).then((data:any)=>{
      console.log(data);
      this.users = data;
    })
  }

  fetchCourse() {
    this.db.fetchCourse().then((data: any) => {
      console.log(data);
      this.course = data;
    });
  }

  fetchDisability() {
    this.db.fetchDisabilityCategory().then((data: any) => {
      console.log(data);
      this.disabilityCategory = data;
    });
  }

  fetchSubDisability() {
    const id = this.filter.disabilityCategory;
    console.log(id);
    this.db.fetchDisabilitySubCategoryById(id).then((data: any) => {
      this.subcategory = data;
      console.log(this.subcategory);
    });
  }

  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'admissionstatus.xlsx');
  }
}
