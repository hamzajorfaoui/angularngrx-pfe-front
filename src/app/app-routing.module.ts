import { Dept_FillResolver } from './Resolves/Dept_Fill.resolve';
import { DepartementResolver } from './Resolves/departement.resolve';
import { TabmatiereComponent } from './Base/pages/matiere/tabmatiere/tabmatiere.component';
import { MatiereComponent } from './Base/pages/matiere/matiere/matiere.component';
import { FiliereComponent } from './Base/pages/filiere/filiere.component';
import { DepartementComponent } from './Base/pages/departement/departement/departement.component';
import { SearchprofComponent } from './Base/pages/Prof/searchprof/searchprof.component';
import { GestionprofsComponent } from './Base/pages/Prof/gestionprofs/gestionprofs.component';
import { HomepageComponent } from './Base/pages/homepage/homepage.component';
import { DashboardComponent } from './Base/dashboard/dashboard.component';
import { LoginComponent } from './LoginPage/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './Services/authguard.guard';
import { NOauthGuard } from './Services/noauth.guard';


const routes: Routes = [
  {path:"login", component:LoginComponent , canActivate:[NOauthGuard]},
  {path:"dashboard" , 
  component: DashboardComponent,
  canActivate:[AuthguardGuard],
  children:[
  {path:'etudiant' , resolve:{deptfill:Dept_FillResolver}, loadChildren:"./Base/pages/etudiant/etudiant.module#EtudiantModule"},
  {path:'actualite' ,resolve:{deptfill:Dept_FillResolver},loadChildren:"./Base/pages/actualité/actualite.module#ActualiteModule"},
  {path:'emploi' ,loadChildren:() => import('./Base/pages/Emploi/emploi.module').then(m => m.EmploiModule)} , 
  
  {path:'prof/gestion' , component:GestionprofsComponent},
  {path:'prof/chercher' , component:SearchprofComponent },
  {path:'departement/gestion' , component:DepartementComponent , resolve:{departement:DepartementResolver}},
  {path:'filiere/gestion', resolve:{departement:DepartementResolver} , component:FiliereComponent},
  {path:'filiere/matiere/gestion' , resolve:{deptfill:Dept_FillResolver},component:MatiereComponent , children:[
    {path:':filierename/:filiereid' , component:TabmatiereComponent}
  ]}, 
  {path:'' ,  component:HomepageComponent},

  {path:"**", redirectTo:''},
  ]
},
  {path:"**", redirectTo:"login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
