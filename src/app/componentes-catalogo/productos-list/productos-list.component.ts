import { Component } from '@angular/core';
import { ProductosCardComponent } from '../productos-card/productos-card.component';
import { Productos } from '../../modelo/productos.model';
import { ProductosService } from '../../service/productos.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-productos-list',
  imports: [ProductosCardComponent, CommonModule, MenuComponent],
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.css'
})
export class ProductosListComponent {
  listadoProductos: Productos[] = [];

  constructor(private productoServicio : ProductosService){
    productoServicio.obtenerProductos().subscribe(producto => {
      console.log("Productos ===> ", producto);
      this.listadoProductos = producto
     });
  }

  filteredProducts = [...this.listadoProductos];

  onSearch(searchTerm: string) {
    console.log("padre", searchTerm);
    this.filteredProducts = this.listadoProductos.filter(product =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  detalle(producto : Productos){

  }


}
