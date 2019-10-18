import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {

  constructor() { }

  data = [
    {
      name: 'Actividad 1',
      description: 'Realizar  pasos 1',
    },
    {
      name: 'Actividad 2',
      description: 'Realizar  pasos 2',
    },
    {
      name: 'Actividad 3',
      description: 'Realizar  pasos 3',
    },
    {
      name: 'Actividad 4',
      description: 'Realizar  pasos 4',
    }
  ];


  settings = {
    add: {
      addButtonContent: '<i class="fa fa-plus"></i>',
      createButtonContent: '<i class="fa fa-check"></i>',
      cancelButtonContent: '<i class="fa fa-times"></i>',
    },
    edit: {
      editButtonContent: '<i class="fa fa-pen"></i>',
      saveButtonContent: '<i class="fa fa-check"></i>',
      cancelButtonContent: '<i class="fa fa-times"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Nombre',
        type: 'string',
      },
      description: {
        title: 'Descripcion',
        type: 'string',
      },
    },
  };

  ngOnInit() {
  }

}
