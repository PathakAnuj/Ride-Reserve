import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing } from './features/public/landing/landing/landing';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home',
    component: Landing
  },
  { path: 'login',
    component: Landing
  },
  { path: 'register',
    component: Landing
  },
  {
    path: '**', redirectTo: '/home'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
