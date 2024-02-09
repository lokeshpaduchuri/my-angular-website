import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotographyComponent } from './photography/photography.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotographyComponent, HomepageComponent, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-website';
}
