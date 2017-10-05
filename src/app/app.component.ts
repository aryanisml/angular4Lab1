import { Component} from "@angular/core";

@Component({
selector:'myapp',
template:`<h1>{{title}}</h1><hero-app></hero-app>`

})


export class AppComponent{
title:string='Hello World';

}