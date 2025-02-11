import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Productos } from '../modelo/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos : Productos[]=[
    {id: 1, nombre:"Sillon", precio:500, descripcion:"Su tapiza familia.", imagen:"/assets/images/sillon.jpg"},
    {id: 2, nombre:"Mesa", precio:500, descripcion:"Plastico",  imagen:"/assets/images/mesa.jpg"},
    {id: 3, nombre:"Lampara", precio:500, descripcion:"Luz fosforente",  imagen:"/assets/images/lampara.jpg"}
  ];

  obtenerProductos():Observable<Productos[]>{
    return of(this.productos);
  }

  constructor() {

  }
}
