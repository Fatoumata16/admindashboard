import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-listeetudiantvrai',
  templateUrl: './listeetudiantvrai.page.html',
  styleUrls: ['./listeetudiantvrai.page.scss'],
})
export class ListeetudiantvraiPage implements OnInit {
nom!:string
nomn!:string

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
 this.tl=id;
 this.q=this.tl.formations.nom
 this.ido=this.tl.id
 console.log(this.tl)
 this.debutd = new Date(this.tl.datedebut).toISOString().substring(0, 10);
 this.find = new Date(this.tl.datefin).toISOString().substring(0, 10);
  this.nomn=this.tl.nom


 }
 getDateInputString(){
  const inputDate = new Date(this.debutd); // Remplacez par la valeur de votre champ d'entrée
  const formattedDate = inputDate.toISOString().slice(0, 10).replace(/-/g, '-');
  const inputDat = new Date(this.find); // Remplacez par la valeur de votre champ d'entrée
  const formattedDat = inputDat.toISOString().slice(0, 10).replace(/-/g, '-');
   this.serv.modificationpromo(this.ido,this.nomn,formattedDate,formattedDat,this.q).subscribe(data=>{
    console.log("superbe")
   })
 }
 all(id:any){
  this.serv.supprimerpromotion(id).subscribe(data=>{
   console.log("supprimerr")
  })
  }

  es(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.route.navigate(['/login'])

  }
}
