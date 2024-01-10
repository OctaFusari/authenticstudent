import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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