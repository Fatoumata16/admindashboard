import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-ajoutjury',
  templateUrl: './ajoutjury.page.html',
  styleUrls: ['./ajoutjury.page.scss'],
})
export class AjoutjuryPage implements OnInit {
  nom!: string;
  prenom!: string;
  email!: string;
  prom!: string;
  t!: any[];
  o!: any;
  fi!:any
  promo: any[]=[];
  data: any;
  public champsVides = false;
  public erreurConnexion = false;
// ajoutjury
  constructor(private soutenanceService: StockageeService,private route:Router) { }

  ngOnInit() {
    this.soutenanceService.lalistedesformation().subscribe(data=>{
      this.t=data
      console.log(this.t)
    })
    this.data = new FormData();

  }
 
 onFilly(event:any){
  console.log("allerrrrrrrr")
   this.o=event.target.value
   console.log(event.target.value)
   this.soutenanceService.lalistepromotionparformation(event.target.value).subscribe(data=>{
    this.promo=data
   })
 }
 onFileSelec(event: any) {
  this.prom = event.target.value;
  console.log("heure de fin");
  console.log(this.prom);
}
onFileSelected(event: any) {
  this.fi = event.target.value;
  console.log(this.fi)
}
alle(){
//   if (!this.nom || !this.prenom || !this.email || !this.prom || !this.fi) {
//     this.champsVides = true;
//     this.erreurConnexion = false;
//     this.ngOnInit();
//     return;
//  }
 this.champsVides =false;
 this.erreurConnexion = false;
 alert("enregistrer avec succes")

  this.soutenanceService.juryajout(this.nom,this.prenom,"username","pass",this.email,this.prom,"jury").subscribe(data=>{console.log(data)
  })
 }
 es(){
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  this.route.navigate(['/login'])

}
}
