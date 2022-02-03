import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { FeedComponent } from './componentes/feed/feed.component';
import { HomeComponent } from './componentes/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { RedutorPipe } from './pipes/redutor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    HomeComponent,
    DialogComponent,
    RedutorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
