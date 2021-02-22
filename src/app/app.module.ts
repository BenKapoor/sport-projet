import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EquipeListComponent } from './equipe/equipe-list/equipe-list.component';
import { EquipesService } from './services/equipes.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SeasonService } from './services/season.service';
import { SingleEquipeComponent } from './equipe/single-equipe/single-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeListComponent,
    SingleEquipeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    EquipesService,
    SeasonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
