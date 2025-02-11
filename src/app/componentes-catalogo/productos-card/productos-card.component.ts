import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Productos } from '../../modelo/productos.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-card',
  imports: [CommonModule],
  templateUrl: './productos-card.component.html',
  styleUrl: './productos-card.component.css'
})
export class ProductosCardComponent {
  @Input() productos: Productos = {
    id: 0,
    nombre: '',
    precio : 0,
    descripcion : '',
    imagen:''
  };
  @Output() productoSeleccionado : EventEmitter <Productos> = new EventEmitter<Productos>();
  seleccionarProducto(){
    this.productoSeleccionado.emit(this.productos);
  }

}
