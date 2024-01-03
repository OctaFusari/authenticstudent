import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-universita',
  templateUrl: './universita.component.html',
  styleUrls: ['./universita.component.css']
})
export class UniversitaComponent {
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    let sezione__due__title = document.getElementById('sezione__due__title') as HTMLElement;
    let sezione__due__title__pre = document.getElementById('sezione__due__title__pre') as HTMLElement;
    let sezione__tre__title__pre = document.getElementById('sezione__tre__title__pre') as HTMLElement;
    let sezione__quattro__title__pre = document.getElementById('sezione__quattro__title__pre') as HTMLElement;


    let sezione__container = document.getElementById('sezione__container') as HTMLElement;

    let sezione__due = document.getElementById('sezione__due') as HTMLElement;
    let sezione__tre = document.getElementById('sezione__tre') as HTMLElement;
    let sezione__quattro = document.getElementById('sezione__quattro') as HTMLElement;
    let sezione__cinque = document.getElementById('sezione__cinque') as HTMLElement;

    let sezione__container__pos = sezione__container.offsetTop
    let sezione__container__down = sezione__cinque.offsetTop;

    window.onscroll = function () {
      if (window.innerWidth > 800) {
        if (window.scrollY >= (sezione__container__pos - 300)) {
          if ((window.scrollY >= (sezione__due.offsetTop - 300)) && (window.scrollY <= (sezione__tre.offsetTop - 300))) {
            sezione__due__title.innerHTML = "Il nostro programma universitario";
            sezione__tre__title__pre.style.setProperty("display", "block");
            sezione__quattro__title__pre.style.setProperty("display", "block");
            sezione__due__title__pre.style.setProperty("display", "none");

          }
          else if ((window.scrollY >= (sezione__tre.offsetTop - 300)) && (window.scrollY <= (sezione__quattro.offsetTop - 300))) {
            sezione__due__title.innerHTML = "Le nostre università";
            sezione__due__title__pre.style.setProperty("display", "block");
            sezione__tre__title__pre.style.setProperty("display", "none");
            sezione__quattro__title__pre.style.setProperty("display", "block");
          }
          else if (window.scrollY >= (sezione__quattro.offsetTop - 300)) {
            sezione__due__title.innerHTML = "I punti di forza del nostro programma";

            sezione__due__title__pre.style.setProperty("display", "block");
            sezione__tre__title__pre.style.setProperty("display", "block");
            sezione__quattro__title__pre.style.setProperty("display", "none");
          }
        }
        else if (window.scrollY < (sezione__container__pos - 300)) {
          sezione__due__title.innerHTML = "";
          sezione__due__title__pre.style.setProperty("display", "block");
        }
        if (window.scrollY > (sezione__container__down)) {
          sezione__due__title.innerHTML = "";
          sezione__due__title__pre.style.setProperty("display", "block");
        }
      }
      else{
        sezione__due__title.innerHTML = "";
        sezione__due__title__pre.style.setProperty("display", "block");
        sezione__tre__title__pre.style.setProperty("display", "block");
        sezione__quattro__title__pre.style.setProperty("display", "block");
      }
    }
  }

  isElementVisible = false;

  toggleElement() {
    this.isElementVisible = !this.isElementVisible;
  }

}
