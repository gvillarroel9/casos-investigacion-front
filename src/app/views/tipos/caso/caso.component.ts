import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caso',
  templateUrl: './caso.component.html',
  styleUrls: ['./caso.component.scss']
})
export class CasoComponent implements OnInit {
  data = [
    {
      name: 'Tipo Caso 1',
      description: 'Detalles Tipo Caso 1',
    },
    {
      name: 'Tipo Caso 2',
      description: 'Detalles Tipo Caso 2',
    },
    {
      name: 'Tipo Caso 3',
      description: 'Detalles Tipo Caso 3',
    },
    {
      name: 'Tipo Caso 4',
      description: 'Detalles Tipo Caso 4',
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


  constructor() { }

  ngOnInit() {
  }

}
