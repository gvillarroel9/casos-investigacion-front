import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.scss']
})
export class ProveedorListComponent implements OnInit {

  constructor() { }

  data = [
    {
      name: 'Proveedor 1',
      description: 'Detalles proveedor 1',
    },
    {
      name: 'Proveedor 2',
      description: 'Detalles proveedor 2',
    },
    {
      name: 'Proveedor 3',
      description: 'Detalles proveedor 3',
    },
    {
      name: 'Proveedor 4',
      description: 'Detalles proveedor 4',
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
