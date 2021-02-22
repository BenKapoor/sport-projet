import { RouterModule, Routes } from '@angular/router';

import { EquipeListComponent } from './equipe/equipe-list/equipe-list.component';
import { NgModule } from '@angular/core';
import { SingleEquipeComponent } from './equipe/single-equipe/single-equipe.component';

const routes: Routes = [
  { path: 'teams/view/:id', component: SingleEquipeComponent },
  { path: 'teams', component: EquipeListComponent },
  { path: '', redirectTo: 'teams', pathMatch: 'full' },
  { path: '**', redirectTo: 'teams' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
