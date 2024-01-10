import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScuoleSuperioriComponent } from './components/scuole-superiori/scuole-superiori.component';
import { UniversitaComponent } from './components/universita/universita.component';
import { MasterComponent } from './components/master/master.component';
import { TestimonianzeComponent } from './components/testimonianze/testimonianze.component';
import { PersonalizzaProgettoComponent } from './components/personalizza-progetto/personalizza-progetto.component';
import { CommunityCollegeComponent } from './components/community-college/community-college.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { PrivacyPolicyComponent } from './components/policies/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './components/policies/refund-policy/refund-policy.component';
import { TermsOfServiceComponent } from './components/policies/terms-of-service/terms-of-service.component';
import { LegalNoticeComponent } from './components/policies/legal-notice/legal-notice.component';
import { RipetizioniComponent } from './components/ripetizioni/ripetizioni.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"scuole-superiori", component: ScuoleSuperioriComponent},
  {path:"community-college", component: CommunityCollegeComponent},
  {path:"university", component: UniversitaComponent},
  {path:"master", component: MasterComponent},
  {path:"chi-siamo", component: ChiSiamoComponent},
  {path:"iscrizione", component: PersonalizzaProgettoComponent},
  {path:"testimonianze", component: TestimonianzeComponent},
  {path:"ripetizioni", component: RipetizioniComponent},
  {path:"privacy-policy", component: PrivacyPolicyComponent},
  {path:"refund-policy", component: RefundPolicyComponent},
  {path:"terms-of-service", component: TermsOfServiceComponent},
  {path:"legal-notice", component: LegalNoticeComponent},
  {path:"header", component: HeaderComponent},
  {path:"footer", component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
