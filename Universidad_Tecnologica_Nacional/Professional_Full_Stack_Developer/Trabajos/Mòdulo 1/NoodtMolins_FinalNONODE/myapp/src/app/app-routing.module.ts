import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {path:"", component:IndexComponent},
  {path:"articulos", component:ArticulosComponent},
  {path:"articulos/articulo/:id", component:DetalleComponent},
  {path:"ingresar", component:LoginComponent},
  {path:"registrarse", component:RegistroComponent},
  {path:"**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
