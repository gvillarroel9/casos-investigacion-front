import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casos-add',
  templateUrl: './casos-add.component.html',
  styleUrls: ['./casos-add.component.scss']
})
export class CasosAddComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }


}
