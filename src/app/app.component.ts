import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './componentes-catalogo/menu/menu.component';
import { ProductosListComponent } from './componentes-catalogo/productos-list/productos-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, ProductosListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cat-prod';
}
