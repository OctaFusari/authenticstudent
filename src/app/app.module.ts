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
import { RefundPolicyComponent } from './components/policies/refund-policy/refund-policy.component';
import { TermsOfServiceComponent } from './components/policies/terms-of-service/terms-of-service.component';
import { LegalNoticeComponent } from './components/policies/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/policies/privacy-policy/privacy-policy.component';
import { RipetizioniComponent } from './components/ripetizioni/ripetizioni.component';

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
    TestimonianzeComponent,
    RefundPolicyComponent,
    TermsOfServiceComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    RipetizioniComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
