import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { AffichageComponentComponent } from './affichage-component/affichage-component.component';
import { PontService } from './pont.service';
import { Routes, Router, RouterModule } from '@angular/router';


imports: [
  FormsModule, //Line to add
  BrowserModule
]
const appRoutes: Routes = [
  { path: 'affichage', component: AffichageComponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    AffichageComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [ServiceService,PontService],
  bootstrap: [AppComponent]
})
export class AppModule { }
