import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template:`
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
/*   templateUrl: './app.component.html', */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authenticstudent';
  constructor(public router:Router){}

  octimal(){
    window.location.href = "https://octimal.it/";
  }

  stu__tiktok(){
    window.location.href = "https://www.tiktok.com/@authenticstudent_it";
  }

  stu__instagram(){
    window.location.href = "https://www.instagram.com/authenticstudent_it?igsh=cnZ3MHpvcHdld2N2";
  }

  load = 0;

  ngOnInit(): void {

    this.load = 0;
    setTimeout(() => {
      this.load = 1;
    },2000);
    let hrefLocation:string = window.location.href;
    if((hrefLocation).includes("university")){
      this.router.navigate(['/university']);
      console.log("entrato")
    }
    else if((hrefLocation).includes("scuole-superiori")){
      this.router.navigate(['/scuole-superiori']);
    }
    else if((hrefLocation).includes("community-college")){
      this.router.navigate(['/community-college']);
    }
    else if((hrefLocation).includes("master")){
      this.router.navigate(['/master']);
    }
    else if((hrefLocation).includes("chi-siamo")){
      this.router.navigate(['/chi-siamo']);
    }
    else if((hrefLocation).includes("testimonianze")){
      this.router.navigate(['/testimonianze']);
    }
    else if((hrefLocation).includes("ripetizioni")){
      this.router.navigate(['/ripetizioni']);
    }
    else if((hrefLocation).includes("privacy-policy")){
      this.router.navigate(['/privacy-policy']);
    }
    else if((hrefLocation).includes("refund-policy")){
      this.router.navigate(['/refund-policy']);
    }
    else if((hrefLocation).includes("terms-of-service")){
      this.router.navigate(['/terms-of-service']);
    }
    else if((hrefLocation).includes("legal-notice")){
      this.router.navigate(['/legal-notice']);
    }
    else{
      this.router.navigate(['/']);
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }  

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  link__3(){
    window.location.href = "mailto:${authenticstudent.it@gmail.com}";
  }
}