import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-listeetudiant',
  templateUrl: './listeetudiant.page.html',
  styleUrls: ['./listeetudiant.page.scss'],
})
export class ListeetudiantPage implements OnInit {
  modif: any;
  id:any
  nom!:string
  heurefin!:any
  heuredebut!:any
  debut:string=''
  fini!:any
  ti!: any[];
  nomn: any;
  a: any;
  b!: string;
ol(ids: any) {
  this.id=ids
 this.serv. soutenanceparid(ids).subscribe(data=>{
  this.modif=data
  console.log(this.modif)
  this.nom=this.modif.nom
  this.debut = new Date(this.modif.datedebut).toISOString().substring(0, 10);
  console.log(this.modif.datedebut)
  console.log(this.debut)
  console.log("le debutttttttttttttttttttt")
  this.heuredebut=this.modif.heuredeb
  console.log(this.heuredebut)
  this.heurefin=this.modif.heurefin
 })
}
   t!:any[]
   //liste soutenace
  constructor(private http:HttpClient, private serv:StockageeService,private route:Router) { }

  ngOnInit() {
    this.serv.listesoutenance().subscribe(data => {
      this.t = data.map(soutenance => {
          const dateDebut = soutenance.datedebut.slice(0, 10);
          return {...soutenance, datedebut: dateDebut};
      });
      console.log(this.t);
  });
     this.serv.  lalistedesjurys().subscribe(data=>{
      this.ti=data
     })
  }
  onFileSelected(event: any) {
    this.nomn = event.target.value;
    console.log(" le nommmmm");

    console.log(this.nom);
  }
  // onFilly(event: any) {
  //   this.a=event.target.value;
  //   console.log(this.a)
  //   if(this.a==="note"){
  //     this.b=true
  //     console.log(this.b);

  //   }
  //   else{
  //     this.b=false
  //     console.log(this.b);

  //   }
  //     ;

  //   console.log(this.nom);
  // }
  getDateInputString(){
    const inputDate = new Date(this.debut); // Remplacez par la valeur de votre champ d'entrée
  const formattedDate = inputDate.toISOString().slice(0, 10).replace(/-/g, '-');
    let heured = this.heuredebut.split(":")[0];
    let minutesd = this.heuredebut.split(":")[1];
    let heureFormatte = heured + ":" + minutesd;
    let heure = this.heurefin.split(":")[0];
let minutes = this.heurefin.split(":")[1];
let heureFormattee = heure + ":" + minutes;
   if(this.b==="note"){
    this.serv.soutenancemotif(this.id,this.nom,formattedDate,heureFormatte,heureFormattee,this.nomn,"ogg",true).subscribe(data=>{
      console.log("superbeee")
    })}
    else if(this.b==="pas note"){
      this.serv.soutenancemotif(this.id,this.nom,formattedDate,heureFormatte,heureFormattee,this.nomn,"ogg",false).subscribe(data=>{
        console.log("superbeee")
      })
    }
    else{
      console.log("erreur")
    }
   
   // let formattedDate: string = this.debut.toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'});
    // this.heuredebut = this.datePipe.transform(this.heuredebut, 'HH:mm');
    // this.heurefin = this.datePipe.transform(this.heurefin, 'HH:mm');
   
  }


  es(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.route.navigate(['/login'])

  }
}
