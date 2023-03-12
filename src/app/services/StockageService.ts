import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { catchError, Observable, of } from "rxjs"

@Injectable({
    providedIn: 'root'
  })
  export class StockageeService {
     h!:number
message: any
    constructor( private http:HttpClient) { }
    svetoken(token:string):void{
      localStorage.removeItem(token)
       localStorage.setItem('token',token)
  
    }
    islogged():boolean{
      const token=localStorage.getItem('token')
      console.log(token)
      return !! token
    }
    gettoken(): string | null{
      return localStorage.getItem('token')
    }
    promotionrecentparrapportaformation( n:string):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/ladate/${n}`)
    }
    toutetudiantparrapportapromotion( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lalisteeee/${n}`)
    }
    toutformation():Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lalistedesformation`)
    }
    // ajoutcommentaire(id:string,u:string,com:Commentaires):Observable<any>{
    //   return this.http.post<any>(`http://localhost:8080/creatione/${id}/${u}`,com)
    // }
    // ajoutregion(id:string,u:string,o:number,h:string,f:any):Observable<any>{
    //   return this.http.post<any>(`http://localhost:8080/creationn/${id}/${u}${o}/${h}`,f)
    // }

    promotion( n:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/ladate/${n}`)
    }

    infoetudiant( n:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/infoetud/${n}`)
    }

    infocritere( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/infocritere/${n}`)
    }
   
     ajoutnote(id:number,commentaire:string,etudiant:number,jury:number,critere:number):Observable<any>{
    return this.http.post<any>(`http://localhost:8080/creationvote/${id}/${commentaire}/${etudiant}/${jury}/${critere}`,null)
     }

     etatetudiant( n:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/etatetudiant/${n}`)
    }
    moyennecritere( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/infomoyennecretere/${n}`)
    }

    etudiantordonneeparpromotionnote( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/infomoyenneordonneedesetudiants/${n}`)
    }
      
    noteetudiantparid( n:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/infomoyenneetudiant/${n}`)
    }
    soutenanceactuelquiacommence( n:any):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lasoutenancequiacommencere/${n}`)
    }

    soutenanceactuelquiacommenceetetudiantlu( n:number):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lasoutenancequiacommencereouetudiantlu/${n}`)
    }
    listedesnomdesoutenanceavenir( ):Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/listedesnomdesoutenanceavenir`)
    }

    private baseUrl = 'http://localhost:8080'; 

    
  
    importExcel(file: File, nom: string) {
      // const formData = new FormData();
     let formData = new FormData();

      formData.append('file', file, file.name);
      const url = `${this.baseUrl}/excel/${nom}`;
      return this.http.post(url, formData, { responseType: 'text' });
    }

    lalistedesjurys():Observable<any[]>{
      return this.http.get<any[]>(`http://localhost:8080/lalistedesjurys`)
    }

    soutenanceajout(nom:string,date:any,heuredeb:any,heurefin:any,critere:any[],ad:string,b:boolean):Observable<any>{
      return this.http.post<any>(`http://localhost:8080/soutenance/${nom}/${date}/${heuredeb}/${heurefin}/${critere}/${ad}/${b}`,null)
       }
       listesoutenance():Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:8080/listesoutenance`)
      }
      juryparsoutenance(id:number):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:8080/juryparsoutenance/${id}`)
      }
      listeetudiantparrapportasoutenance(id:number):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:8080/listeetudiantparrapportasoutenance/${id}`)
      }
      listeresultatetudiant(id:string):Observable<any[]>{
        return this.http.get<any[]>(`http://localhost:8080/soutenance/${id}/results`)
      }
      juryajout(nom:string,prenom:string,username:string,motdepasse:string,email:string,prom:string,voir:string):Observable<any>{
        return this.http.post<any>(`http://localhost:8080/ajoutjury/${nom}/${prenom}/${username}/${motdepasse}/${email}/${prom}/${voir}`,null)
         }
         lalistepromotionparformation(id:any):Observable<any[]>{
          return this.http.get<any[]>(`http://localhost:8080/lalistedesformation/${id}`)
        }
        lalistedesformation():Observable<any[]>{
          return this.http.get<any[]>(`http://localhost:8080/lalistedesformation`)
        }
        lastatistiquev(id:any):Observable<any[]>{
          return this.http.get<any[]>(`http://localhost:8080/lastatistiquev/${id}`)
        }
        juryparsoutenancenom(id:any):Observable<any[]>{
          return this.http.get<any[]>(`http://localhost:8080/juryparsoutenancenom/${id}`)
        }
        listecriteresparsoutenancenom(id:any):Observable<any[]>{
          return this.http.get<any[]>(`http://localhost:8080/listecriteresparsoutenancenom/${id}`)
        }
        juryssommeparrapportasoutenance(id:any):Observable<any>{
          return this.http.get<any>(`http://localhost:8080/juryssommeparrapportasoutenance/${id}`)
        }
        etudiantcount():Observable<any>{
          return this.http.get<any>(`http://localhost:8080/etudiantcount`)
        }
        criteresommeparrapportasoutenance(id:any):Observable<any>{
          return this.http.get<any>(`http://localhost:8080/criteresommeparrapportasoutenance/${id}`)
        }
        soutenancecount():Observable<any>{
          return this.http.get<any>(`http://localhost:8080/soutenancecount`)
        }
        soutenanceparid(id:any):Observable<any>{
          return this.http.get<any>(`http://localhost:8080/soutparid/${id}`)
        }
        promotiontioncount():Observable<any>{
          return this.http.get<any>(`http://localhost:8080/promotiontioncount`)
        }
        formationcount():Observable<any>{
          return this.http.get<any>(`http://localhost:8080/formationcount`)
        }
        listpromo():Observable<any[]>{
          return this.http.get<any[]>(`http://localhost:8080/listpromo`)
        }

        creationformation(nom:string,desc:string,objet:string):Observable<any>{
          return this.http.post<any>(`http://localhost:8080/creationformation/${nom}/${desc}/${objet}`,null)
           }
           creationpromo(nom:string,debut:string,fin:string,forma:string):Observable<any>{
            return this.http.post<any>(`http://localhost:8080/creationpromo/${nom}/${debut}/${fin}/${forma}`,null)
             }

             modificationcritere(id:number,nom:string,coeffi:string,formation:string):Observable<any>{
              return this.http.put<any>(`http://localhost:8080/modificationcritere/${id}/${nom}/${coeffi}/${formation}`,null)
               }
               modificationformation(id:number,nom:string,desc:string,objectif:string):Observable<any>{
                return this.http.put<any>(`http://localhost:8080/modificationformation/${id}/${nom}/${desc}/${objectif}`,null)
                 }
                 modificationprojet(id:number,nom:string,desc:string,etudiant:string):Observable<any>{
                  return this.http.put<any>(`http://localhost:8080/modificationprojet/${id}/${nom}/${desc}/${etudiant}`,null)
                   }
                   modificationetudiant(id:number,nom:string,prenom:string,username:string,email:string):Observable<any>{
                    return this.http.put<any>(`http://localhost:8080/modificationetudiant/${id}/${nom}/${prenom}/${username}/${email}`,null)
                     }
                     modificationpromo(id:number,nom:string,debut:string,fin:string,forma:string):Observable<any>{
                      return this.http.put<any>(`http://localhost:8080/ajoutjury/${id}/${nom}/${debut}/${fin}/${forma}`,null)
                       }
                       soutenancemotif(id:number,nom:string,date:string,heuredeb:string,heurefin:string,jurynom:string[],ad:string,bool:boolean):Observable<any>{
                        return this.http.post<any>(`http://localhost:8080/soutenancemotif/${id}/${nom}/${date}/${heuredeb}/${heurefin}/${jurynom}/${ad}/${bool}`,null)
                         }
                         listeetudiantparsout(id:string):Observable<any[]>{
                          return this.http.get<any[]>(`http://localhost:8080/listeetudiantparsout/${id}`)
                        }
                        listcritere(id:any):Observable<any[]>{
                          return this.http.get<any[]>(`http://localhost:8080/listcritereeva/${id}`)
                        }
                        creationcritere(nom:string,desc:string,objet:string):Observable<any>{
                          return this.http.post<any>(`http://localhost:8080/creationpromo/${nom}/${desc}/${objet}`,null)
                           }
                           deleteformation(id:string):Observable<any[]>{
                            return this.http.delete<any[]>(`http://localhost:8080/delete/${id}`)
                          }
                          supprimeretudiant(id:number):Observable<any[]>{
                            return this.http.delete<any[]>(`http://localhost:8080/supprimeretudiant/${id}`)
                          }
                          supprimerpromotion(id:number):Observable<any[]>{
                            return this.http.delete<any[]>(`http://localhost:8080/supprimerpromotion/${id}`)
                          }
                          criteresup(id:string):Observable<any[]>{
                            return this.http.delete<any[]>(`http://localhost:8080/criteresup/${id}`)
                          }
                          soutenanceactuelstatutchanger(id:string):Observable<any>{
                            return this.http.get<any>(`http://localhost:8080/soutenanceactuelstatutchanger/${id}`)
                          }
                          listeetudiantparrapportasoutenanceee(id:string):Observable<any[]>{
                            return this.http.get<any[]>(`http://localhost:8080/listeetudiantparrapportasoutenanceee/${id}`)
                          }
  }