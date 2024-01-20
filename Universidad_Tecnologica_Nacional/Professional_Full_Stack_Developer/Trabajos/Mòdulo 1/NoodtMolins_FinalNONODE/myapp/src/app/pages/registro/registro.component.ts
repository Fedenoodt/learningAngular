import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registForm:FormGroup;
  constructor(private builder: FormBuilder){
    this.registForm = this.builder.group({
      nombre:["", [Validators.required]],
      apellido:["", [Validators.required]],
      telefono:[""],
      email:["", [Validators.required]],
      password:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
  }
  registro(){
    console.log(this.registForm.value);
  }
}
