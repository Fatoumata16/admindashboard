import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { logi } from '../modeles/logi';
import { StockageeService } from '../services/StockageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username!:String;
  
  password!:String;
  f!: logi;
  data: any;
  d!: any;
  m!: boolean;
  h!:any
  public champsVides = false;
  public erreurConnexion = false;
  constructor(  private http:HttpClient, private build:FormBuilder,private tokenserv:StockageeService,private route:Router) { }
 
  ngOnInit() {
    this.data = new FormData();
  }
  onSubmit(){
    this.champsVides = false;
  this.erreurConnexion = false;
    if (!this.username || !this.password) {
      this.champsVides = true;
      this.erreurConnexion = false;
      this.ngOnInit();
      return;
   }
   
    this.f= new logi(this.username,this.password);
    console.log(this.f.username),
    console.log(this.f.password),
    this.champsVides = false;

    
      this.data.append("username",this.username);
      this.data.append("password",this.password);
 
     this.http.post('http://localhost:8080/login',this.data)
     .subscribe(async datee=>{console.log(datee)
      this.champsVides = false;
        this.erreurConnexion = false;
       this.h=this.username;
       this.d=datee;
       localStorage.removeItem(JSON.stringify(datee))
       localStorage.removeItem(this.h)
       localStorage.setItem('token',JSON.stringify(datee))
     localStorage.setItem('username',this.h)
     this.m=this.tokenserv.islogged();
     if(this.m==true){
      console.log("le mmmmmm")
      console.log(localStorage.getItem('token'))
        this.route.navigate(['/essay'])
        //this.presentModal();
        ;

     }
     else{
        console.log('erreur dans la navigation')
     }
     },
     err=>{
       this.m=this.tokenserv.islogged();
       if(this.m==true){
        this.erreurConnexion = true;
         // this.route.navigate(['/accueil'])
         console.log('erreur qui ne passe pas')
         this.ngOnInit();
       }
       else{
         console.log('erreur trop grave')
       }
     }
     )
   }
}
