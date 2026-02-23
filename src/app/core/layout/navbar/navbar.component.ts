import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { TooltipComponent } from '../../../shared/ui/tooltip/tooltip.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgFor,
    TooltipComponent
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

menuItems = [
  { label: 'Home', route: '/', icon: 'assets/images/logo/home.svg' },
  { label: 'Sobre', route: '/about', icon: 'assets/images/logo/about.svg' },
  { label: 'Projetos', route: '/projects', icon: 'assets/images/logo/projects.svg' },
  { label: 'Blog', route: '/blog', icon: 'assets/images/logo/blog.svg' },
  { label: 'Contato', route: '/contact', icon: 'assets/images/logo/contact.svg' }
];

}