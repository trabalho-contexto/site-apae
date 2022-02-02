import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  scrollTo ( element: any ) {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  abrirDialog () {
    this.dialogService.open("TESTE", () => { console.log('fechado') })
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
