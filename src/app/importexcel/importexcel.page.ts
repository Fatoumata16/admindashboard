import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-importexcel',
  templateUrl: './importexcel.page.html',
  styleUrls: ['./importexcel.page.scss'],
})
export class ImportexcelPage implements OnInit {
    t!:any[]
     filee!: any;
  private nom!: string;
  data: any;

  //ajout projet et etudiant on voit aussi seulement les soutenances a venir 
  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient, private serv:StockageeService,private route:Router) { }

  ngOnInit() {
    this.serv.listedesnomdesoutenanceavenir().subscribe(data=>{
      this.t=data;
      console.log(this.t)
    })
    this.data = new FormData();

  }
  onFileSelected(event: any) {
    this.filee = event.target.files[0];
  }
  trouver(event:any){
   console.log(event.target.value)
   this.nom=event.target.value
  }
  onImportExcel() {
    this.data.append("file",this.filee);
    const url = `${this.baseUrl}/excel/${this.nom}`;

    this.http.post(url, this.data, { responseType: 'text' }).subscribe(da=>{

      alert("succesfully")
    })
   
  }
  es(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.route.navigate(['/login'])

  }
  
}
