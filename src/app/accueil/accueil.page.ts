import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
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
  constructor( private soutenanceService: StockageeService) { }

  ngOnInit() {
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
      console.log(this.pl)
     })
     this.soutenanceService.criteresommeparrapportasoutenance(this.a).subscribe(di=>{
      this.pk=di
      console.log(this.pk)
     })
     

    })

  }
  pa(){
    this.soutenanceService. lastatistiquev(this.a).subscribe(dat=>{
      console.log(dat)
    })
  }
  createChart() {
    this.chart = new Chart("MyChart", {

      type: 'bar', //this denotes tha type of chart
  // les criteres evaluation 
      data: {// values on X-Axis
        labels: this.la,
        datasets: [
          {
            label: "performances",
            // LE taux la moyenne des jurys par rapport a un criteres donnee 
            //moyenne global etudiant par criteres
            data:this.m,
            backgroundColor: '#DC2106'
          },
          {
            label: "Profit",
            data: ['0', '0', '0', '0', '17',
              '0.00', '0', '0', '79', '0',
              '0', '0'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}
