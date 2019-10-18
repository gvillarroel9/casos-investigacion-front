import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casos-list',
  templateUrl: './casos-list.component.html',
  styleUrls: ['./casos-list.component.scss']
})
export class CasosListComponent implements OnInit {

  array = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  casoDetailRedirect() {
    this.router.navigateByUrl('/caso-detail');
  }
  casoAddRedirect() {
    this.router.navigateByUrl('/caso-add');
  }

}
