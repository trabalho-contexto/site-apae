import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranstornoService } from 'src/app/componentes/transtorno/transtorno.service';
import { Transtorno } from 'src/modelo/transtorno.modelo';
import { ContentService } from '../content/content.service';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public transtornosList: Transtorno[] = new Array();

  constructor(
    private dialogService: DialogService,
    private transtornoService: TranstornoService,
    private contentService: ContentService,
    private router: Router,
  ) { }

  carregarTranstornos () {
    this.transtornosList = this.transtornoService.getTranstornos()
  }

  ngOnInit(): void {
    this.carregarTranstornos()
  }

  scrollTo ( element: any ) {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  abrirDialogMissao () {
    this.dialogService.open({
      html : this.contentService.getContent('missao'),
      tipo: 'sobre'
    })
  }

  abrirDialogDiagnostico () {
    this.dialogService.open({
      html : this.contentService.getContent('diagnostico'),
      tipo: 'sobre'
    })
  }

  abrirDialogObjetivos () {
    this.dialogService.open({
      html : this.contentService.getContent('objetivos'),
      tipo: 'sobre'
    })
  }

  abrirDialogPrincipios () {
    this.dialogService.open({
      html : this.contentService.getContent('principios'),
      tipo: 'sobre'
    })
  }

  abrirDialogTranstorno ( transtorno: Transtorno ) {
    this.dialogService.open({
      transtorno: transtorno,
      tipo: 'transtorno'
    })
  }

  goToFeed () {
    this.router.navigate(['feed']);
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

