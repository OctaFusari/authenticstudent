import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-ripetizioni',
  templateUrl: './ripetizioni.component.html',
  styleUrls: ['./ripetizioni.component.css']
})
export class RipetizioniComponent {
  constructor(private router: Router) { }
ngOnInit(): void {
  this.router.events.subscribe((event:any) => {
    if (!(event instanceof NavigationEnd)) {
      return;
    }
    window.scrollTo(0, 0)
  });
}
scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
}
link__3(){
  window.location.href = "mailto:${authenticstudent.it@gmail.com}";
}
}
