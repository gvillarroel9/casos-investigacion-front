import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  constructor() { }

  data = [
    {
      name: 'Tipo Ficha 1',
      description: 'Detalles Tipo Ficha 1',
    },
    {
      name: 'Tipo Ficha 2',
      description: 'Detalles Tipo Ficha 2',
    },
    {
      name: 'Tipo Ficha 3',
      description: 'Detalles Tipo Ficha 3',
    },
    {
      name: 'Tipo Ficha 4',
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
