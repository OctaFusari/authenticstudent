import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ScuoleSuperioriComponent } from './components/scuole-superiori/scuole-superiori.component';
import { CommunityCollegeComponent } from './components/community-college/community-college.component';
import { UniversitaComponent } from './components/universita/universita.component';
import { MasterComponent } from './components/master/master.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { PersonalizzaProgettoComponent } from './components/personalizza-progetto/personalizza-progetto.component';
import { TestimonianzeComponent } from './components/testimonianze/testimonianze.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScuoleSuperioriComponent,
    CommunityCollegeComponent,
    UniversitaComponent,
    MasterComponent,
    ChiSiamoComponent,
    PersonalizzaProgettoComponent,
    TestimonianzeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
