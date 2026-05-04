import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que esto esté presente
  imports: [RouterOutlet],
  templateUrl: './app.html', // <--- CAMBIO: Quita el '.component'
  styleUrl: './app.scss',    // <--- CAMBIO: Asegúrate de que coincida con tu archivo
})
export class App { // <--- CAMBIO: El nombre de la clase debe ser 'App'
  title = 'ppw-angular-21';
}