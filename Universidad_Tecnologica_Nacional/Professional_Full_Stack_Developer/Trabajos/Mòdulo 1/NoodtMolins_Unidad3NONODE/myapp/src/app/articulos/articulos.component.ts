import { Component } from '@angular/core';
import { ArticulosService } from '../articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css',
  providers: [ArticulosService]
})
export class ArticulosComponent {
  articulos:any;
  constructor(private articulosRequest: ArticulosService) {
    this.articulosRequest.getCosas()
    .subscribe(
      (response:any) => {
        console.log(response)
        this.articulos = response.results
      }
    )
    console.log(this.articulos)
  }
}