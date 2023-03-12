import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss'],
})
export class ResultatPage implements OnInit {
  t!:any[]
  ti!:any[]
  o:boolean=false

  heurefin!: string;
  constructor( private soutenanceService: StockageeService ,private route:Router) { }

  ngOnInit() {
    this.soutenanceService.listesoutenance().subscribe(data => {
      this.t = data;
      console.log(this.t);
    });
  }
  onFileSelec(event: any) {
    this.heurefin = event.target.value
    console.log("heure de fin");
    console.log(this.heurefin);
  }
  aller(){
    this.o=true
    this.soutenanceService.listeresultatetudiant(this.heurefin).subscribe(data=>{
      console.log(data[2])
      console.log("le resultat iciiiiiiiiiiiiiiiiiiiii")
      this.ti=data
      console.log(this.ti)

      this.soutenanceService.soutenanceactuelstatutchanger(this.heurefin).subscribe(data=>{
        console.log(data)
      })
     
    })
  
  }
  es(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.route.navigate(['/login'])

  }
}
