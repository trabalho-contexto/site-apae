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

}
