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
import { RipetizioniComponent } from './ripetizioni/ripetizioni.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { httpsCallableFromURL } from 'firebase/functions';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    RipetizioniComponent,
    FooterComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
		HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
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
      {path:"footer", component: FooterComponent},
      {path:"**", component:HomeComponent}
    ]),
    provideFirebaseApp(() => initializeApp({"projectId":"authenticstudent-1d356","appId":"1:982692498217:web:239773d25ba4f18528c538","storageBucket":"authenticstudent-1d356.appspot.com","apiKey":"AIzaSyBh_tzyVxIjsvZkoxjfF1AjxtrM61IIBWI","authDomain":"authenticstudent-1d356.firebaseapp.com","messagingSenderId":"982692498217","measurementId":"G-8XJVRQ8PE6"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
/*     provideAppCheck(() => {
      const provider = new ReCaptchaEnterpriseProvider(  reCAPTCHA Enterprise site key  );
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }), */
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
