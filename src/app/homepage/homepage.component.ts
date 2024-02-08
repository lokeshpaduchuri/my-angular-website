import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HeroComponent } from '../shared/components/hero/hero.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
