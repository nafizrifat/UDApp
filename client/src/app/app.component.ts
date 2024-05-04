import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title:string = 'RIFAT';
  users:any;

  constructor(private http: HttpClient) {
    console.log('constructor');
  }

  ngOnInit(){
    this.http.get("https://localhost:5081/api/users").subscribe({
      next: response => this.users = response,
      error: error=>console.log('error'),
      complete: ()=>{console.log('Completed')}      
      })
    } 
  }

