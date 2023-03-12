import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-listeformation',
  templateUrl: './listeformation.page.html',
  styleUrls: ['./listeformation.page.scss'],
})
export class ListeformationPage implements OnInit {
  to: any[]=[];
  p!: any[];
   nom!:string
   desc!:string
   obs!:string
   nomn!:string
   descr!:string
   obst!:string
  ql: any;
  public champsVides = false;
  public erreurConnexion = false;
  constructor(private soutenanceService: StockageeService,private route:Router) { }

  ngOnInit() {
    this.soutenanceService.lalistedesformation().subscribe(data=>{
      this.to=data
      console.log(" listeeeeee")
      console.log(this.to)
    })
  }
  onImportExcel(n:any){
    this.soutenanceService.lalistepromotionparformation(n).subscribe(data=>{
      this.p=data
      console.log(this.p)
    })
  }
  ap(){
    if (!this.nom || !this.desc || !this.obs) {
      this.champsVides = true;
      this.erreurConnexion = false;
      this.ngOnInit();
      return;
   }
    this.soutenanceService.creationformation(this.nom,this.desc,this.obs).subscribe(data=>{
      alert("bien enregistrer")
      this.ngOnInit()
    })
  }
  alle(id:any){
    this.ql=id.id
  this.nomn=id.nom
  this.descr=id.description
  this.obst=id.objectif
  }
  apk(){
    this.soutenanceService. modificationformation(this.ql,this.nomn,this.descr,this.obst).subscribe(data=>{
      console.log(data)
    })
  }
  all(id:any){
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   heightAuto:false,
    //   showConfirmButton: false,
    //   timer: 1500
    // })
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
            heightAuto:false,

      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    this.soutenanceService. deleteformation(id).subscribe(data=>{
     console.log("supprimerr")


     
    })
    }

    es(){
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.route.navigate(['/login'])
  
    }
}
