import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Caso Investigacion';

  constructor(
              private router: Router
             ) {
  }

  logout() {
    this.router.navigate(['/login']);
  }

  // tslint:disable-next-line: member-ordering
  items = [
    {
      title: 'Casos De Investigación',
      icon: 'clipboard-outline',
      link: '/casos'
    },
    {
      title: 'Investigador',
      icon: 'person',
      link: '/investigador'
    },
    {
      title: 'Actividad',
      icon: 'message-square-outline',
      link: '/actividad',
    },
    {
      title: 'Proveedor',
      icon: 'shopping-bag-outline',
      link: '/proveedor',
    },
    {
      title: 'Rol',
      icon: 'settings-2-outline',
      link: '/rol',
    },
    {
      title: 'Tipo de Caso',
      icon: 'file-add-outline',
      link: '/tipo-caso',
    },
    {
      title: 'Tipo de Ficha',
      icon: 'clipboard-outline',
      link: '/tipo-ficha',
    },
    {
      title: 'Tipo de Irregularidad',
      icon: 'link-outline',
      link: '/tipo-irre',
    },
    {
      title: 'Subtipo de Irregularidad',
      icon: 'link-2-outline',
      link: '/subtipo-irre',
    },
    {
      title: 'Salir',
      icon: 'power-outline',
      link: '/auth/login',
    },
  ];
}
