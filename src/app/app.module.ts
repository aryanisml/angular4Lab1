import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroMainComponent }     from './hero-main.component';
import { HeroService }         from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroMainComponent
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})






export class AppModule { }
