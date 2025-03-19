import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-jobapplicationreports',
  templateUrl: './jobapplicationreports.component.html',
  styleUrls: ['./jobapplicationreports.component.scss']
})
export class JobapplicationreportsComponent {

  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;

  disabilityCategory: any []=[];
  subcategory: any[]=[];
  job: any[]=[];
  user: any[]=[]

  constructor(private db: DatabaseService){}

    filter = {
    job: '',
    endDate: '',
    startDate: '',
    status: '',
    disabilityCategory: '',
    disabilitySubCategory: '',
  };

  ngOnInit(): void {
    this.db.fetchJobOnly().then((data:any)=>{
      console.log(data);
      this.job = data;
    })

    this.fetchDisability();
  }

  exportToExcel() {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
            this.TABLE.nativeElement
          );
          const wb: XLSX.WorkBook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
          XLSX.writeFile(wb, 'jobapplicationstatus.xlsx');
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
  

  fetchUser(){
    console.log(this.filter);
    
    this.db.fetchJobApplicationReports(this.filter).then((data:any)=>{
      console.log(data);
      
      if(data.message === 'Records retrieved successfully'){
        this.user = data.data;
      }else{
        this.user = []
      }
    })
  }
}
