import { RouterLink, RouterLinkActive } from '@angular/router';
import { TooltipComponent } from '../../../shared/ui/tooltip/tooltip.component';
import { IconComponent } from '../../../shared/ui/icon/icon.component';
import type { IconName } from '../../../shared/ui/icon/icon.types';
import { Component, HostListener, ChangeDetectionStrategy, ElementRef, Renderer2, inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TooltipComponent,
    IconComponent
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavbarComponent {

  private elementRef = inject<ElementRef>(ElementRef);
  private renderer = inject(Renderer2);
  
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
    { label: 'Início', route: '/', icon: 'home' },
    { label: 'Sobre', route: '/about', icon: 'about' },
    { label: 'Projetos', route: '/projects', icon: 'projects' },
    { label: 'Contato', route: '/contact', icon: 'contact' },
    { label: 'Blog', route: '/blog', icon: 'blog' },
  ];

}