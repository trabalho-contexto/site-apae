import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './componentes/feed/feed.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'feed', component: FeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
