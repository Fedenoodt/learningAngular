import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor( private http:HttpClient) { }
  getCosas(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=gorras&limit=3")
  }

  getSpecific(id:string){
    return this.http.get(`https://api.mercadolibre.com/items/${id}`)
  }
}
