import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mod = false
  person = 'amigo';
  nombre () {
    this.mod = true
    this.person = 'fedenoodt'
  }
}
