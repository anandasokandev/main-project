import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-matrimony-users',
  templateUrl: './matrimony-users.component.html',
  styleUrls: ['./matrimony-users.component.scss']
})
export class MatrimonyUsersComponent {
  
  constructor(private db: DatabaseService){}

  users: any[]=[];
  number: boolean = false

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
    
  }
}
