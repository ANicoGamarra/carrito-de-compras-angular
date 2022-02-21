import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoPrincipalComponent } from './componentes/cuerpo-principal/cuerpo-principal.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

import { ProductosServicesService } from './servicios/productos-services.service';

@NgModule({
  declarations: [
    AppComponent,
    CuerpoPrincipalComponent,
    CarritoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductosServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
