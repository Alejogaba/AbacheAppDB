import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{ListaProductosComponent} from './lista-productos/lista-productos.component';
import{HomepageComponent} from './homepage/homepage.component';
import{RegistroComponent} from './registro/registro.component';
import{ProductosDetallesComponent} from './productos-detalles/productos-detalles.component';
import{InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import{ProductoRegistroComponent} from './producto-registro/producto-registro.component';
import{CarroCompraComponent} from './carro-compra/carro-compra.component';
import{FacturacionComponent} from './facturacion/facturacion.component';
import{PerfilComponent} from './perfil/perfil.component'
import{ PerfilMenuComponent } from './perfil-menu/perfil-menu.component'
import{LayoutComponent} from './layout/layout.component'
import{HistorialComprasComponent} from './historial-compras/historial-compras.component'
import{ListaUsuariosComponent} from './lista-usuarios/lista-usuarios.component';
import{ProductoEditarComponent} from './producto-editar/producto-editar.component';
import{PerfilChatComponent} from './perfil-chat/perfil-chat.component';


const routes: Routes = [
  {path:'inicio',component:HomepageComponent},
  {path:'registro-usuario',component:RegistroComponent},
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'lista-productos',component:ListaProductosComponent},
  {path:'editar-producto/:id',component:ProductoEditarComponent},
  {path:'detalles/:id',component:ProductosDetallesComponent},
{path:'inicio-sesion',component:InicioSesionComponent},
{path:'registro-producto',component:ProductoRegistroComponent},
{path:'carrito',component:CarroCompraComponent},
{path:'factura',component:FacturacionComponent},
{path:'perfil',component:PerfilMenuComponent,children:[
  { path: '', component: LayoutComponent },
  {path:'editar-perfil',component:PerfilComponent,outlet:'submenu-perfil'},
{path:'historial-compras',component:HistorialComprasComponent,outlet:'submenu-perfil'},
{path:'lista-usuarios',component:ListaUsuariosComponent,outlet:'submenu-perfil'},
{path:'mensajes',component:PerfilChatComponent,outlet:'submenu-perfil'}]},
  
  ];

  export const appRoutingModule = RouterModule.forRoot(routes);

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoutingModule { }