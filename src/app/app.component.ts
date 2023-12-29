import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authenticstudent';
  
  octimal(){
    window.location.href = "https://octimal.it/";
  }

  ngOnInit(): void {
    let sezione__quattro = document.getElementById('sezione__quattro') as HTMLElement;
    let menu__uno = document.getElementById('menu__uno') as HTMLElement;
    let menu__due = document.getElementById('menu__due') as HTMLElement;
    let menu__tre = document.getElementById('menu__tre') as HTMLElement;
   
   let sezione__quattro__pos = sezione__quattro.offsetTop;

   window.onscroll = function () {
    if (window.scrollY >= (sezione__quattro__pos-600)) {
      menu__uno.style.setProperty("fill", "#ffffff !important");
      menu__due.style.setProperty("color", "#ffffff !important");
      menu__tre.style.setProperty("color", "#ffffff !important");
    }
    else{
      menu__uno.style.setProperty("fill", "#08466E !important");
      menu__due.style.setProperty("color", "#08466E !important");
      menu__tre.style.setProperty("color", "#08466E !important");
    }
  }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }  

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
}
