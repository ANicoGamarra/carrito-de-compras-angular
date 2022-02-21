import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductosServicesService } from 'src/app/servicios/productos-services.service';

@Component({
  selector: 'app-cuerpo-principal',
  templateUrl: './cuerpo-principal.component.html',
  styleUrls: ['./cuerpo-principal.component.css']
})
export class CuerpoPrincipalComponent implements OnInit {

  @Output() eventoDeCompra = new EventEmitter<number>();


productos:any = []
id:any =""
productoComprado:any ={}


  enviarPedidoCompra(value: number) { //envia el codigo del producto a comprar (como un evento) al componente carrito
  this.eventoDeCompra.emit(value);
  }

  constructor(private cargarProductosService: ProductosServicesService) { 
   
  }


  ngOnInit(): void {
    this.mostrarProductos();
  }
    

  mostrarProductos(){
    // llama al servicio con los datos y los guarda en el array
    this.productos = this.cargarProductosService.datosProductos;    
  }

}
