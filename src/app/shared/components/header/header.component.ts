import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
      name: 'Web Development',
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
}
