import { Component } from '@angular/core';

@Component({
  selector: 'app-scuole-superiori',
  templateUrl: './scuole-superiori.component.html',
  styleUrls: ['./scuole-superiori.component.css']
})
export class ScuoleSuperioriComponent {

  ngOnInit(): void {
    let sezione__due__title = document.getElementById('sezione__due__title') as HTMLElement;
    let sezione__due__title__pre = document.getElementById('sezione__due__title__pre') as HTMLElement;
    let sezione__tre__title__pre = document.getElementById('sezione__tre__title__pre') as HTMLElement;
    let sezione__quattro__title__pre = document.getElementById('sezione__quattro__title__pre') as HTMLElement;
    
    
    let sezione__container = document.getElementById('sezione__container') as HTMLElement;
    
    let sezione__due = document.getElementById('sezione__due') as HTMLElement;
    let sezione__tre = document.getElementById('sezione__tre') as HTMLElement;
    let sezione__quattro = document.getElementById('sezione__quattro') as HTMLElement;
    
    let sezione__container__pos = sezione__container.offsetTop
   window.onscroll = function () {
    if (window.scrollY >= (sezione__container__pos - 300)) {
        if ((window.scrollY >= (sezione__due.offsetTop-300)) && (window.scrollY <= (sezione__tre.offsetTop-300))) {
            sezione__due__title.innerHTML = "I nostri programmi";
            sezione__tre__title__pre.style.setProperty("display", "block");
            sezione__quattro__title__pre.style.setProperty("display", "block");
            sezione__due__title__pre.style.setProperty("display", "none");
          
        }
        else if ((window.scrollY >= (sezione__tre.offsetTop-300)) && (window.scrollY <= (sezione__quattro.offsetTop-300))) {
          sezione__due__title.innerHTML = "Le nostre scuole negli USA";
          sezione__due__title__pre.style.setProperty("display", "block");
          sezione__tre__title__pre.style.setProperty("display", "none");
          sezione__quattro__title__pre.style.setProperty("display", "block");
        }
        else if (window.scrollY >= (sezione__quattro.offsetTop-300)) {
          sezione__due__title.innerHTML = "Gli elementi distintivi di questo programma ";
        
          sezione__due__title__pre.style.setProperty("display", "block");
          sezione__tre__title__pre.style.setProperty("display", "block");
          sezione__quattro__title__pre.style.setProperty("display", "none");
        }
      }
      else if(window.scrollY < (sezione__container__pos - 300)){
        sezione__due__title.innerHTML = "";
        sezione__due__title__pre.style.setProperty("display", "block");
      }
    }
  }

}
