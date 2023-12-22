import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(): void {
    let opzione__uno__menu = document.getElementById('opzione__uno__menu') as HTMLElement;
    let opzione__due__menu = document.getElementById('opzione__due__menu') as HTMLElement;
    let opzione__tre__menu = document.getElementById('opzione__tre__menu') as HTMLElement;
    let opzione__quattro__menu = document.getElementById('opzione__quattro__menu') as HTMLElement;
    let opzione__uno = document.getElementById('opzione__uno') as HTMLElement;
    let opzione__due = document.getElementById('opzione__due') as HTMLElement;
    let opzione__tre = document.getElementById('opzione__tre') as HTMLElement;
    let opzione__quattro = document.getElementById('opzione__quattro') as HTMLElement;
    let sezione__due = document.getElementById('sezione__due') as HTMLElement;
    let sezione__due__interno__uno = document.getElementById('sezione__due') as HTMLElement;
    let var__code = 0;
    let pos__sez__due = sezione__due.offsetTop;
    window.onscroll = function () {
      if (window.scrollY >= (pos__sez__due - 300)) {
        if ((window.scrollY >= (opzione__uno.offsetTop - 300)) && (window.scrollY <= (opzione__due.offsetTop - 300))) {
          var__code = 0;
        }
        else if ((window.scrollY >= (opzione__due.offsetTop - 300)) && (window.scrollY <= (opzione__tre.offsetTop - 300))) {
          var__code = 1;
        }
        else if ((window.scrollY >= (opzione__tre.offsetTop - 300)) && (window.scrollY <= (opzione__quattro.offsetTop - 300))) {
          var__code = 2;
        }
        else if (window.scrollY >= (opzione__quattro.offsetTop - 300)) {
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
      }
      else if (window.scrollY < pos__sez__due) {
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
