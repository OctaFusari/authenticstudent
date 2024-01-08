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
