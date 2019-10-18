import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items = [
    {
      title: 'Tesorero',
      icon: 'briefcase-outline',
      expanded: true,
      children: [
        {
          title: 'Cash In',
          icon: 'log-in-outline',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Cash out',
          icon: 'log-out-outline',
          ulr: '#', // goes directly into `href` attribute
        }
      ],
    },
    {
      title: 'Reportes',
      icon: 'clipboard-outline',
      children: [
        {
          title: 'Reporte 1',
          icon: 'clipboard-outline',
          link: [], 
        },
        {
          title: 'Reporte 2',
          icon: 'clipboard-outline',
          link: [], 
        }
      ]
    },
    {
      title: 'Mi perfil',
      icon: 'person-outline',
      link: [],
    },
    {
      title: 'Salir',
      icon: 'power-outline',
      link: [],
    },
  ];

  constructor(private sidebarService: NbSidebarService) {  }

  ngOnInit() {
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}
