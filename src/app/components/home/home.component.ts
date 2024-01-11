import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
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
    
    this.router.events.subscribe((event:any) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    let opzione__uno__menu = document.getElementById('opzione__uno__menu') as HTMLElement;
    let opzione__due__menu = document.getElementById('opzione__due__menu') as HTMLElement;
    let opzione__tre__menu = document.getElementById('opzione__tre__menu') as HTMLElement;
    let opzione__quattro__menu = document.getElementById('opzione__quattro__menu') as HTMLElement;
    let opzione__uno = document.getElementById('opzione__uno') as HTMLElement;
    let opzione__due = document.getElementById('opzione__due') as HTMLElement;
    let opzione__tre = document.getElementById('opzione__tre') as HTMLElement;
    let opzione__quattro = document.getElementById('opzione__quattro') as HTMLElement;
    let sezione__due = document.getElementById('sezione__due') as HTMLElement;
    let sezione__tre = document.getElementById('sezione__tre') as HTMLElement;
    let var__code = 0;
    let pos__sez__due = sezione__due.offsetTop;
    let pos__sez__tre = sezione__tre.offsetTop;

    window.onscroll = function () {

      if (window.scrollY >= (pos__sez__due + 300)) {
        if ((window.scrollY >= (opzione__uno.offsetTop + 300)) && (window.scrollY <= (opzione__due.offsetTop + 300))) {
          var__code = 0;
          console.log("entr uno")
        }
        else if ((window.scrollY >= (opzione__due.offsetTop + 300)) && (window.scrollY <= (opzione__tre.offsetTop + 300))) {
          var__code = 1;
          console.log("entr due")
        }
        else if ((window.scrollY >= (opzione__tre.offsetTop + 300)) && (window.scrollY <= (opzione__quattro.offsetTop + 300))) {
          var__code = 2;
          console.log("entr tre")
        }
        else if (window.scrollY >= (opzione__quattro.offsetTop + 300)) {
          var__code = 3;
        }

        if (var__code == 0) {
          opzione__uno__menu.style.setProperty("color", "#08466E");
          opzione__due__menu.style.setProperty("color", "#08456e6b");
          opzione__tre__menu.style.setProperty("color", "#08456e6b");
          opzione__quattro__menu.style.setProperty("color", "#08456e6b");
        }
        else if (var__code == 1) {
          opzione__uno__menu.style.setProperty("color", "#08456e6b");
          opzione__due__menu.style.setProperty("color", "#08466E");
          opzione__tre__menu.style.setProperty("color", "#08456e6b");
          opzione__quattro__menu.style.setProperty("color", "#08456e6b");
        }
        else if (var__code == 2) {
          opzione__uno__menu.style.setProperty("color", "#08456e6b");
          opzione__due__menu.style.setProperty("color", "#08456e6b");
          opzione__tre__menu.style.setProperty("color", "#08466E");
          opzione__quattro__menu.style.setProperty("color", "#08456e6b");
        }
        else if (var__code == 3) {
          opzione__uno__menu.style.setProperty("color", "#08456e6b");
          opzione__due__menu.style.setProperty("color", "#08456e6b");
          opzione__tre__menu.style.setProperty("color", "#08456e6b");
          opzione__quattro__menu.style.setProperty("color", "#08466E");
        }
        if(window.scrollY >= (pos__sez__tre)){
          opzione__uno__menu.style.setProperty("color", "#08456e00");
          opzione__due__menu.style.setProperty("color", "#08456e00");
          opzione__tre__menu.style.setProperty("color", "#08456e00");
          opzione__quattro__menu.style.setProperty("color", "#08456e00");
        }
      }
      else if ((window.scrollY < (pos__sez__due+500))) {
        opzione__uno__menu.style.setProperty("color", "#08456e00");
        opzione__due__menu.style.setProperty("color", "#08456e00");
        opzione__tre__menu.style.setProperty("color", "#08456e00");
        opzione__quattro__menu.style.setProperty("color", "#08456e00");
      }
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
