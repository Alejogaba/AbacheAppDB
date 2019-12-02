import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductosDetallesComponent } from './productos-detalles/productos-detalles.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ProductoRegistroComponent } from './producto-registro/producto-registro.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilMenuComponent } from './perfil-menu/perfil-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { FiltroClientePipe } from './pipes/filtro-cliente.pipe';
import { ProductoEditarComponent } from './producto-editar/producto-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EncabezadoComponent,
    HomepageComponent,
    ListaProductosComponent,
    RegistroComponent,
    ProductosDetallesComponent,
    InicioSesionComponent,
    ProductoRegistroComponent,
    CarroCompraComponent,
    FacturacionComponent,
    PerfilComponent,
    PerfilMenuComponent,
    LayoutComponent,
    HistorialComprasComponent,
    ListaUsuariosComponent,
    FiltroClientePipe,
    ProductoEditarComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule, 
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
