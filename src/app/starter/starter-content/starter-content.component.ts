import { Component, OnInit } from '@angular/core';



declare var AdminLTE: any;


@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css']
})
export class StarterContentComponent implements OnInit {

  options: Object;

  constructor() {

  }

  ngOnInit() {

    //  Update the AdminLTE layouts
    AdminLTE.init();

  }


}
