import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {

  constructor(
    private routes:Router
    ){

}

}
