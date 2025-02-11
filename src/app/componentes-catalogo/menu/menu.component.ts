import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  buscarproducto: string = '';
  @Output() buscarProd = new EventEmitter<string>();
  buscar(){
    console.log("dfsdgdf", this.buscarproducto);
    this.buscarProd.emit(this.buscarproducto);
  }
}
