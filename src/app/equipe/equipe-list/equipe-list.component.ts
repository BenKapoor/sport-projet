import { Component, OnDestroy, OnInit } from '@angular/core';

import { EquipesService } from './../../services/equipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.scss']
})
export class EquipeListComponent implements OnInit, OnDestroy {

  teams: any[];
  teamsSubscription: Subscription;

  constructor(private equipesService: EquipesService) { }

  content: string;

  ngOnInit(): void {
    this.equipesService.getLeagueFromServe().subscribe(
      data => {
        this.content = JSON.parse(data);
        
        console.log(this.content['api']['fixtures'])
        this.teams = this.content['api']['fixtures'];
        
        console.log(this.teams);
        
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    
    this.equipesService.emitTeamsSubject();
  }

  ngOnDestroy(): void {
    this.teamsSubscription.unsubscribe();
  }
}
