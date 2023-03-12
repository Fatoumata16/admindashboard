import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-critereinfo',
  templateUrl: './critereinfo.page.html',
  styleUrls: ['./critereinfo.page.scss'],
})
export class CritereinfoPage implements OnInit {

  nom!:string
nomn!:string
n!:string
p!:string
m!:string
e!:string
u!:string
no!:string
pe!:string

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
  z: any;
  g: any;
  //liste promo
  constructor( private serv:StockageeService,private route:Router) { }

  ngOnInit() {
     this.serv.listpromo().subscribe(data=>{
      this.t=data
      console.log(this.t)
     })
     this.serv.toutformation().subscribe(data=>{
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
 this.n=id[1]
 this.p=id[2]
 



 }

 all(id:any){
  alert("supresion effectue ")
 this.serv.criteresup(id).subscribe(data=>{
  console.log("supprimerr")
 })
 }
 getDateInputString(){
  this.serv.modificationcritere(this.w,this.n,this.p,this.z).subscribe(data=>{
    console.log("modification fait")
   })
 }
 onFileSelecte(sout:any){
  this.z=sout.target.value
  this.serv.listcritere(sout.target.value).subscribe(data=>{
    this.k=data
    console.log("etudianttttttttttttttttttttt")
    console.log(this.k)
  })
 }
 onFile(sout:any){
  this.g=sout.target.value
  
  
 }
 getDateInputStrin(){
  this.serv.creationcritere(this.no,this.pe,this.g).subscribe(data=>{
    console.log("ajout fait")
   })
 }
 es(){
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  this.route.navigate(['/login'])

}
}
