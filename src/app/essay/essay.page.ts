import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-essay',
  templateUrl: './essay.page.html',
  styleUrls: ['./essay.page.scss'],
})
export class EssayPage implements OnInit {

  public chart :any
  web=300;
  a: string="";
  t!:any[]
  m!:any[]
  la!: any[];
  p!: any;
  pl!: any[];
  pk: any;
  fo: any;
  pro: any;
  st: any;
  et: any;
  j!: any;
  private chartExists = false;
  pdi!: any[];
  //accueil
  constructor( private soutenanceService: StockageeService,private route:Router) { }

  ngOnInit() {
   this.j= localStorage.getItem('username')
    this.soutenanceService.listesoutenance().subscribe(data=>{
      this.t=data
      console.log(this.t)
    })
    this.soutenanceService.formationcount().subscribe(data=>{
      this.fo=data
    })
    this.soutenanceService.etudiantcount().subscribe(data=>{
      this.et=data
    })
    this.soutenanceService.soutenancecount().subscribe(data=>{
      this.st=data
    })
    this.soutenanceService.promotiontioncount().subscribe(data=>{
      this.pro=data
    })
    this.p=0
    this.pk=0

  }
  onFileSelected(event:any){
    this.a=event.target.value;
    console.log(this.a)
    this.soutenanceService. lastatistiquev(this.a).subscribe(dat=>{
     this.m=dat
     console.log(this.m)
     this.soutenanceService.listecriteresparsoutenancenom(this.a).subscribe(data=>{
      this.la=data
      console.log(this.la)
      this.createChart();
     })
     this.soutenanceService.juryssommeparrapportasoutenance(this.a).subscribe(da=>{
      this.p=da
      console.log("alerrrrrrrrrrrrrr")
      console.log(da)
     })
     this.soutenanceService.juryparsoutenancenom(this.a).subscribe(di=>{
      this.pl=di
      console.log("les juryssssssssssssss")
      console.log(this.pl)
     })
     this.soutenanceService.criteresommeparrapportasoutenance(this.a).subscribe(di=>{
      this.pk=di
      console.log(this.pk)
      this.soutenanceService.listeetudiantparrapportasoutenanceee(this.a).subscribe(di=>{
        console.log("les pdiiiiiiiiiiiiiiii")
  
        this.pdi=di
        console.log(this.pk)
       })
     })
    
     

    })

  }
  pa(){
    this.soutenanceService. lastatistiquev(this.a).subscribe(dat=>{
      console.log(dat)
    })
  }
  createChart() {
    // Destroy the chart if it already exists
    if (this.chartExists) {
        this.chart.destroy();
    }

    // Create the new chart
    this.chart = new Chart("MyChart", {
        type: 'bar', //this denotes tha type of chart
        // les criteres evaluation 
        data: {// values on X-Axis
            labels: this.la,
            datasets: [
                {
                    label: "pourcentage d'evolution",
                    // LE taux la moyenne des jurys par rapport a un criteres donnee 
                    //moyenne global etudiant par criteres
                    data:this.m,
                    backgroundColor: '#DC2106'
                }
            ]
        },
        options: {
            aspectRatio: 2.5
        }
    });

    // Set chartExists to true
    this.chartExists = true;
}
  es(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.route.navigate(['/login'])

  }
}
