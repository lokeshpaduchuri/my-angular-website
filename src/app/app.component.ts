import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotographyComponent } from './photography/photography.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotographyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-website';
}
