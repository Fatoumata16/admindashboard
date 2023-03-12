import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creersoutenance',
  templateUrl: './creersoutenance.page.html',
  styleUrls: ['./creersoutenance.page.scss'],
})
export class CreersoutenancePage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  es(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.route.navigate(['/login'])

  }
}
