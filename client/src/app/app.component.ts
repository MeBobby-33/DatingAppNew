import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'client';
  users: any;

constructor(private http: HttpClient){}
  // tslint:disable-next-line: typedef
  ngOnInit() {

   this.getusers();
  }

// tslint:disable-next-line: typedef
getusers(){
  this.http.get('https://localhost:5001/api/users').subscribe(response => {
    this.users = response;
  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
   console.log(error);
  });
}
}
