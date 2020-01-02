import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: any = [
    {
      nombre: 'Nicolas',
      apellido: 'Ticona Valdivia',
      cargo: 'Desarrollo Web',
      sueldo: 3000
    },
    {
      nombre: 'Manuel',
      apellido: 'Apaza Valdivia',
      cargo: 'Desarrollo Empresarial',
      sueldo: 5000
    },
    {
      nombre: 'Vannessa',
      apellido: 'Ticona Fernandez',
      cargo: 'Marketing',
      sueldo: 3000
    },
    {
      nombre: 'Tiffay',
      apellido: 'Jacinto Valdivia',
      cargo: 'Asesoria',
      sueldo: 1000
    },
    {
      nombre: 'Diego',
      apellido: 'Ticona Mercedes',
      cargo: 'SEO',
      sueldo: 7000
    },
    {
      nombre: 'Eduardo',
      apellido: 'Araoz Valdivia',
      cargo: 'Desarrollo Web',
      sueldo: 3000
    },
    {
      nombre: 'Camila',
      apellido: 'Espada Valdivia',
      cargo: 'Desarrollo Empresarial',
      sueldo: 5000
    },
    {
      nombre: 'Miguel',
      apellido: 'Ticona Salazar',
      cargo: 'Marketing',
      sueldo: 3000
    },
    {
      nombre: 'Carmen',
      apellido: 'Augist Valdivia',
      cargo: 'Asesoria',
      sueldo: 1000
    },
    {
      nombre: 'Carlos',
      apellido: 'Guevara Mercedes',
      cargo: 'SEO',
      sueldo: 7000
    },
    
  ]
  listData: MatTableDataSource<any>
  displayedColumns: string[] = ['Nombre','Apellido','Cargo','Sueldo','actions'];

  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator

  searchKey: string = '';

  constructor() { }

  ngOnInit() {
    this.listData = new MatTableDataSource(this.empleados);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    // this.listData.filterPredicate = (data, filter) => {
      
    //   return this.displayedColumns.some(el => {
    //     console.log(el)
    //     return el != 'actions' && data[el].toLowerCase().indexOf(filter) != -1;
    //   })
    // }
  }

  onSearchClear(){
    this.searchKey = '';
    this.onApllyFilter()
  }

  onApllyFilter(){
    this.listData.filter = this.searchKey.toLocaleLowerCase();
  }

}
