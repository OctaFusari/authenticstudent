import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-testimonianze',
  templateUrl: './testimonianze.component.html',
  styleUrls: ['./testimonianze.component.css']
})
export class TestimonianzeComponent {
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((event:any) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    let sezione__due = document.getElementById('sezione__due') as HTMLElement;
    let sezione__tre = document.getElementById('sezione__tre') as HTMLElement;
    let sezione__quattro = document.getElementById('sezione__quattro') as HTMLElement;
    let sezione__cinque = document.getElementById('sezione__cinque') as HTMLElement;
    let sezione__container = document.getElementById('sezione__container') as HTMLElement;
    let title__sezioni = document.getElementById('title__sezioni') as HTMLElement;
              
    let sezione__container__pos = sezione__container.offsetTop
    let sezione__container__down = sezione__cinque.offsetTop;

   window.onscroll = function () {
    if (window.scrollY >= (sezione__container__pos - 500)) {
        if ((window.scrollY >= (sezione__due.offsetTop-500)) && (window.scrollY <= (sezione__tre.offsetTop-500))) {
          title__sezioni.innerHTML = "Scuole superiori";
          
        }
        else if ((window.scrollY >= (sezione__tre.offsetTop-500)) && (window.scrollY <= (sezione__quattro.offsetTop-500))) {
          title__sezioni.innerHTML = "Università";
        }
        else if (window.scrollY >= (sezione__quattro.offsetTop-500)) {
          title__sezioni.innerHTML = "Master";

        }
      }
      else if(window.scrollY < (sezione__container__pos - 500)){
        title__sezioni.innerHTML = "";
      }
      if(window.scrollY > (sezione__container__down - 500)){
        title__sezioni.innerHTML = "";
        console.log("entrato fra")
      }
    }
  }
}
