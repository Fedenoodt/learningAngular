import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  registForm:FormGroup;
  constructor(private builder: FormBuilder){
    this.registForm = this.builder.group({
      email:["", [Validators.required]],
      password:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
  }
  registro(){
    console.log(this.registForm.value);
  }
}

