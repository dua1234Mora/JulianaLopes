import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroComponent} from 'src/app/center/hero/hero.component';
import {CenterComponent} from 'src/app/center/center.component';
import{ContactComponent} from 'src/app/center/contact/contact.component'
import {PilatesComponent} from 'src/app/center/pilates/pilates.component';
import {PublicComponent} from 'src/app/center/public/public.component';
import {BlogComponent} from 'src/app/center/blog/blog.component';
import {StudioComponent} from 'src/app/center/studio/studio.component';


const routes: Routes = [  {
  path: '',redirectTo: '/Hero', pathMatch: 'full'
},
{
  path: 'Hero',component:HeroComponent
},
{
  path: 'pilates',component:PilatesComponent
},
{
  path: 'about',component:CenterComponent
},
{
  path: 'contact',component:ContactComponent
}
,
{
  path: 'public',component:PublicComponent
},
{
  path: 'blog',component:BlogComponent
},
{
  path: 'studio',component:StudioComponent
}
];
/*
const routes: Routes = [
  {
    path: '',redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'register-user',component:RegisterComponent
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'technician',
    canActivate: [GuardasGuard],
    loadChildren: () =>import('./modules/technician/technicin.module').then((m) => m.TechnicianModule)
  },
  {
    path: 'user',
    canActivate: [GuardasGuard],
    loadChildren: () =>import('./modules/patient/patient.module').then((m) => m.PatientModule)
  },
  {
    path: 'staff',
    canActivate: [GuardasGuard],
    loadChildren: () =>import('./modules/staff/staff.module').then((m) => m.StaffModule)
  },
  {
    path: '**',component:NotFoundComponent
  }
  ]*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
