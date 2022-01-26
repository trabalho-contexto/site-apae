import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  scrollTo ( element: any ) {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  myFunction() {
    console.log('funcao');
    let topnav: any = document.getElementById("myTopnav");
    
    if (topnav.className == "navbar topnav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "navbar topnav";
    }
  }

}
