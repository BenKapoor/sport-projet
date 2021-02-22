import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  teamsSubject = new Subject<any[]>();

  private teams: any = [];

  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '7dda84b029msh5bad4ed4d885089p183219jsn1075d641c5fb',
  }

  constructor(private httpClient: HttpClient) { 
    // console.log("leagues : " + this.getTeamFromServe());
    // console.log(this.teams)
  }

  emitTeamsSubject(){
    this.teamsSubject.next(this.teams.slice());
    // console.log(this.teams.slice());
    
  }

  // getTeamFromServe(){
  //   this.httpClient.get<any[]>('https://api-football-v1.p.rapidapi.com/v3/leagues?id=13&season=2020',{
  //     headers: {
  //       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  //       'X-RapidAPI-Key': '7dda84b029msh5bad4ed4d885089p183219jsn1075d641c5fb',
  //     },
  //     observe: 'body',
  //     responseType: 'json'
  //   }).subscribe(
  //     (response) => {
  //       this.teams = response;
  //       this.emitTeamsSubject();
  //       console.log(this.teams)
  //     },
  //     (error) => {
  //       console.log('Erreur ! : ' +error);
  //     }
  //   )
  // }


  getTeamFromServe(id: number): Observable<any> {
    return this.httpClient.get('https://api-football-v1.p.rapidapi.com/v3/teams?id='+ id
    )
  }

  getLeagueFromServe(){
    return this.httpClient.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/live', {
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7dda84b029msh5bad4ed4d885089p183219jsn1075d641c5fb',
      },
      observe: 'body',
      responseType: 'text'
    })
    // .subscribe(
    //   (res) => {
    //     this.teams = res;
    //     console.log(res)
    //   }
    // )
    }
}
