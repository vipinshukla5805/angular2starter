import { Component } from '@angular/core';

@Component({
    selector:'typescript-basics',
    styleUrls:['./typescriptbasics.component.css'],
    templateUrl:'./typescriptbasics.component.html'
})


export class TypescriptBasics{
// creating a class

//Defining variables 

 x: number; //string,Array,boolean,
    constructor(x:number){
        this.x = x;
    }


 //creating methods

  add(point: TypescriptBasics) {
        return new TypescriptBasics(this.x + point.x);
    }
}