import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-listejury',
  templateUrl: './listejury.page.html',
  styleUrls: ['./listejury.page.scss'],
})
export class ListejuryPage implements OnInit {
 id!:any
 t!:any[]
 ti!:any[]
 //   la liste des etudiants qui se trouve dans une promo donne
  constructor(public routeur:ActivatedRoute,private serv:StockageeService,private route:Router) { }

  ngOnInit() {
    this.id=this.routeur.snapshot.params['id']
    this.serv. juryparsoutenance(this.id).subscribe(data=>{
      this.t=data
      console.log(this.t)
    })
    this.serv. listeetudiantparrapportasoutenance(5).subscribe(data=>{
      this.ti=data
      console.log("la liste 2222222")
      console.log(this.ti)
    })
  }
  es(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.route.navigate(['/login'])

  }
}
