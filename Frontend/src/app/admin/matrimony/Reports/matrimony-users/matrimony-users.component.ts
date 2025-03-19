import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-matrimony-users',
  templateUrl: './matrimony-users.component.html',
  styleUrls: ['./matrimony-users.component.scss']
})
export class MatrimonyUsersComponent {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef; 
  
  constructor(private db: DatabaseService){}

  users: any[]=[];
  number: boolean = false
  title = 'Excel';


  filter = {
    district: '',
    marital_status: '',
    gender: '',
    status:'',
    religion: '',
    caste: ''
  }

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
    'Kasaragod'
  ];

  fetchUser(){
    console.log(this.filter);
    this.db.fetchMatrimonyReport(this.filter).then((data:any)=>{
      this.number = !this.number
      console.log(data);
      this.users = data;
    })
  }

  exportToExcel(){
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement); 
        const wb: XLSX.WorkBook = XLSX.utils.book_new(); 
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); 
        XLSX.writeFile(wb, 'matrimonyuserdetails.xlsx');
  }
}
