import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  pages = [
    {
      name: 'Photography',
      url: '/photography'
    },
    {
      name: 'Web-Development',
      url: '/developer'
    },
    {
      name: 'About',
      url: '/about-me'
    },
    {
      name: 'Contact',
      url: '/contact-me'
    },
  ]
  
  /**
   * Property to select route
   */
  selectedUrl: any;

  constructor( private router: Router) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.selectedUrl = this.router.url;
  }

  urlSelected(url: any) {
    this.selectedUrl = url;
  }
}
