import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';
import { SoutenanceService } from '../SoutenanceService';

@Component({
  selector: 'app-ajoutetudiant',
  templateUrl: './ajoutetudiant.page.html',
  styleUrls: ['./ajoutetudiant.page.scss'],
})
export class AjoutetudiantPage implements OnInit {
   t!:any[]
   nom: any[] = [];
   nomm!: string;
  datee!: string;
  heuredeb!: string;
  heurefin!: string;
  juryNoms!: string[];
  a!:string
  ad!: string;
  b!:string
//creer soutenance
     constructor(private soutenanceService: StockageeService,private route:Router) { }

  // addJurysToSoutenance() {
  //   const soutenanceId = 1;
  //   const juryIds = [2, 3, 4];
  //   this.soutenanceService.addJurysToSoutenance(soutenanceId, juryIds).subscribe(response => {
  //     console.log(response);
  //   });
  ngOnInit() {
    this.soutenanceService.lalistedesjurys().subscribe(data => {
      this.t = data;
      console.log(this.t);
    });

    
  }

  onFileSelected(event: any) {
    this.nom = event.target.value;
    console.log(" le nommmmm");

    console.log(this.nom);
  }

  onFileSelecte(event: any) {
    const selectedDate = new Date(event.target.value);
    this.datee = selectedDate.toISOString().slice(0, 10);
    console.log(" la date");
    console.log(this.datee);
  }
  onFileSelect(event: any) {
    const selectedDate = new Date(event.target.value);
    this.heuredeb = selectedDate.toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'});
    console.log("heure");
    console.log(this.heuredeb);
}
onFileSelec(event: any) {
  const selectedDate = new Date(event.target.value);
  this.heurefin = selectedDate.toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'});
  console.log("heure de fin");
  console.log(this.heurefin);
}
aller(){
  if(this.b==="note"){
    this.soutenanceService.soutenanceajout(this.nomm,this.datee,this.heuredeb,this.heurefin,this.nom,"ad",true).subscribe(data=>{
      alert("ajout effectue")
    })
  }
 else if(this.b==="pas note"){
  this.soutenanceService.soutenanceajout(this.nomm,this.datee,this.heuredeb,this.heurefin,this.nom,"ad",false).subscribe(data=>{
  alert("ajout effectue")
  })
 }
 else{
  console.log("erreur")
 }
}
es(){
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  this.route.navigate(['/login'])

}
}
