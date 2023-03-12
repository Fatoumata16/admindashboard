import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-listepromotion',
  templateUrl: './listepromotion.page.html',
  styleUrls: ['./listepromotion.page.scss'],
})
export class ListepromotionPage implements OnInit {
//liste etudiants
nom!:string
nomn!:string
n!:string
p!:string
m!:string
e!:string
u!:string

  t!:any[]
  debut!:string
  fin!:string
  fini!:string
  debutd!:string
  find!:string
  tl!:any

  ti!: any[];
  ido: any;
  q: any;
  k!: any[];
  se!: any[];
  w: any;
  //liste promo
  constructor( private serv:StockageeService,private route:Router) { }

  ngOnInit() {
     this.serv.listpromo().subscribe(data=>{
      this.t=data
      console.log(this.t)
     })
     this.serv.lalistedesformation().subscribe(data=>{
      this.ti=data;
     })
     this.serv. listesoutenance().subscribe(data=>{
     this.se=data
     console.log(this.se)
     })
  }
 onFileSelected(){
  const inputDate = new Date(this.debut); // Remplacez par la valeur de votre champ d'entrée
  const formattedDate = inputDate.toISOString().slice(0, 10).replace(/-/g, '/');
  const inputDat = new Date(this.fin); // Remplacez par la valeur de votre champ d'entrée
  const formattedDat = inputDate.toISOString().slice(0, 10).replace(/-/g, '/');
   this.serv.creationpromo(this.nom,this.debut,this.fin,this.fini).subscribe(data=>{
    console.log("superbe  fatou")
   })
 }
 alle(id:any){
  this.w=id[0]
 this.n=id[2]
 this.p=id[3]
 this.u=id[4]
this.e=id[1]



 }
 getDateInputString(){
  this.serv.modificationetudiant(this.w,this.n,this.p,this.u,this.e).subscribe(data=>{
    console.log("modification fait")
   })
 }
 onFileSelecte(sout:any){
  this.serv.listeetudiantparsout(sout.target.value).subscribe(data=>{
    this.k=data
    console.log("etudianttttttttttttttttttttt")
    console.log(this.k)
  })
 }
 all(id:any){
  this.serv.supprimeretudiant(id).subscribe(data=>{
   console.log("supprimerr")
  })
  }

  es(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.route.navigate(['/login'])

  }
}
