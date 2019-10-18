import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  constructor() { }

  data = [
    {
      name: 'Rol 1',
      description: 'Detalles Rol 1',
    },
    {
      name: 'Rol 2',
      description: 'Detalles Rol 2',
    },
    {
      name: 'Rol 3',
      description: 'Detalles Rol 3',
    },
    {
      name: 'Rol 4',
      description: 'Detalles Rol 4',
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
