import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  articulo:any;
  constructor( private activatedRoute:ActivatedRoute, private articulosService:ArticulosService) {
    this.specificResponse()
  }
  async specificResponse () {
    try{
      const id = this.activatedRoute.snapshot.paramMap.get("id")
      if (id) {this.articulo = await this.articulosService.getSpecific(id)
        .subscribe(
          (response:any) => {
            this.articulo = response
          }
        )}

      else { console.error('El ID no proporciona informacion.')}
    }
    catch (e){
      console.error(e)
    }
  }
}
