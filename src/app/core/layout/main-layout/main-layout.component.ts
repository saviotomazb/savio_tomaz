import { Component, ChangeDetectorRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router
} from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, LoadingComponent],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {

  loading = true;

  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  constructor() {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {

        this.loading = true;
        this.cdr.detectChanges();

      }

      if (event instanceof NavigationEnd) {

        this.loading = false;

        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });

        this.cdr.detectChanges();

      }

      if (
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {

        this.loading = false;
        this.cdr.detectChanges();

      }

    });

  }

}