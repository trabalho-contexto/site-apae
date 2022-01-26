import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo ( element: any ) {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  myFunction() {
    let topnav: any = document.getElementById("myTopnav");
    
    if (topnav.className == "topnav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "topnav";
    }
  }

}
