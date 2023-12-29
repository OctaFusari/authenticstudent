import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-personalizza-progetto',
  templateUrl: './personalizza-progetto.component.html',
  styleUrls: ['./personalizza-progetto.component.css']
})
export class PersonalizzaProgettoComponent {
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
}
