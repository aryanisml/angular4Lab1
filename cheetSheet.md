If you want to use [(mgModel)] then import {FormsModule} from '@angular/forms' and include formsmodule in @ngModule(
imports:[FormsModule]
)

class member cannot have const keyword variable
For property type assignment use ':'
for Value declartion use '='
*ngFor="let item of Array"
event use (click) '(eventname)'
*ngIf="propertyName/condition"
instead of ng-class use 
[class.selected]="hero===selectedhero";
whenever creating the component import Component from angular/core file
import { Component } from "@angular/core";
Component declartion

import { Component } from "@angular/core";

@Component({
    selector:'hero-detail',
    templateUrl: './app.component.html',
  
     styleUrls: ['./app.component.css']
})

export class HeroDetailComponent{

}
parent to child communication with Input attribute
import Input 
import { Component, Input } from '@angular/core';
declare property like 
@Input() selectedHero: Hero;
<hero-detail [selectedHero]="selectedHero"></hero-detail>

Whenever creating service use
import { Injectable } from "@angular/core";

whenever writing function
functioName(): returntype {
Implementation
}

so whenever adding the service always add providers in Componenet metadata
@Component({
  selector: 'app-root',
 
 templateUrl: './app.component.html',
  
styleUrls: ['./app.component.css'],
 
 providers: [HeroService]
})


Inject the service similar to C# constructor injection

LifeCycle hook similar to 1.5
OnInit -? ngOnInit()

defining promise on method use 
getHeros:Promise<hero[]>{
return Promise.resolve(heroes);
}
and conusme this promise use
this.heroService.getHero().then(swapresponse=>this.heros=swapresponse);



