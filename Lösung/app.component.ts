import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  height: number;
  num: number;
  tower: string[];
  res: string;

  calculate(){
    this.tower = [];
    
    if(this.num >= 0 && this.height >= 2){
      for(let i = 0; i < this.height; i++){
        this.res = "";
        this.res += this.num + " * " + (i+2) + " = ";

        this.num = this.num * (i+2);

        this.res += this.num;

        this.tower.push(this.res);
      }

      for(let i = 0; i < this.height;i++){
        this.res = "";
        this.res += this.num + " / "  + (i+2) + " = ";

        this.num = this.num / (i+2);

        this.res += this.num;

        this.tower.push(this.res);
      }
    }
  }

}
