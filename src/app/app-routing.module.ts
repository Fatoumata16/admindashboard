import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'listeetudiant',
    loadChildren: () => import('./listeetudiant/listeetudiant.module').then( m => m.ListeetudiantPageModule)
  },
  {
    path: 'ajoutetudiant',
    loadChildren: () => import('./ajoutetudiant/ajoutetudiant.module').then( m => m.AjoutetudiantPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'importexcel',
    loadChildren: () => import('./importexcel/importexcel.module').then( m => m.ImportexcelPageModule)
  },
  {
    path: 'creersoutenance',
    loadChildren: () => import('./creersoutenance/creersoutenance.module').then( m => m.CreersoutenancePageModule)
  },
  {
    path: 'listejury/:id',
    loadChildren: () => import('./listejury/listejury.module').then( m => m.ListejuryPageModule)
  },
  {
    path: 'listeetudiantvrai',
    loadChildren: () => import('./listeetudiantvrai/listeetudiantvrai.module').then( m => m.ListeetudiantvraiPageModule)
  },
  {
    path: 'resultat',
    loadChildren: () => import('./resultat/resultat.module').then( m => m.ResultatPageModule)
  },
  {
    path: 'ajoutjury',
    loadChildren: () => import('./ajoutjury/ajoutjury.module').then( m => m.AjoutjuryPageModule)
  },
  {
    path: 'listeformation',
    loadChildren: () => import('./listeformation/listeformation.module').then( m => m.ListeformationPageModule)
  },
  {
    path: 'listepromotion',
    loadChildren: () => import('./listepromotion/listepromotion.module').then( m => m.ListepromotionPageModule)
  },
  {
    path: 'essay',
    loadChildren: () => import('./essay/essay.module').then( m => m.EssayPageModule)
  },
  
   
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'critereinfo',
    loadChildren: () => import('./critereinfo/critereinfo.module').then( m => m.CritereinfoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
