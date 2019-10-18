import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-irregularidad',
  templateUrl: './irregularidad.component.html',
  styleUrls: ['./irregularidad.component.scss']
})
export class IrregularidadComponent implements OnInit {

  constructor() { }

  data = [
    {
      name: 'Tipo Irregularidad 1',
      description: 'Detalles Tipo Irregularidad 1',
    },
    {
      name: 'Tipo Irregularidad 2',
      description: 'Detalles Tipo Irregularidad 2',
    },
    {
      name: 'Tipo Irregularidad 3',
      description: 'Detalles Tipo Irregularidad 3',
    },
    {
      name: 'Tipo Irregularidad 4',
      description: 'Detalles Tipo Ficha 4',
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
