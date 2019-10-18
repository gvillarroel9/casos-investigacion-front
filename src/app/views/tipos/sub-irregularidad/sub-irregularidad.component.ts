import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-irregularidad',
  templateUrl: './sub-irregularidad.component.html',
  styleUrls: ['./sub-irregularidad.component.scss']
})
export class SubIrregularidadComponent implements OnInit {

  constructor() { }

  data = [
    {
      name: 'Subtipo Irregularidad 1',
      description: 'Detalles Subtipo Irregularidad 1',
    },
    {
      name: 'Subtipo Irregularidad 2',
      description: 'Detalles Subtipo Irregularidad 2',
    },
    {
      name: 'Subtipo Irregularidad 3',
      description: 'Detalles Subtipo Irregularidad 3',
    },
    {
      name: 'Subtipo Irregularidad 4',
      description: 'Detalles Subtipo Ficha 4',
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
