import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { TooltipComponent } from '../../../shared/ui/tooltip/tooltip.component';
import { IconComponent } from '../../../shared/ui/icon/icon.component';
import { IconName } from '../../../shared/ui/icon/icon.types';
import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgFor,
    TooltipComponent,
    IconComponent
  ],
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  closeMenu() {
    this.isMobileMenuOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.isMobileMenuOpen &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.closeMenu();
    }
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      this.renderer.addClass(document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  }

  menuItems: { label: string; route: string; icon: IconName }[] = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'About', route: '/about', icon: 'about' },
    { label: 'Projects', route: '/projects', icon: 'projects' },
    { label: 'Contact', route: '/contact', icon: 'contact' },
    { label: 'Blog', route: '/blog', icon: 'blog' },
  ];

}