import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, LoadingComponent],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {

  loading = true;
  private navigationStartTime = Date.now();
  private minLoadingTime = 700;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {

        this.navigationStartTime = Date.now();
        this.loading = true;

      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {

        const elapsed = Date.now() - this.navigationStartTime;
        const remaining = this.minLoadingTime - elapsed;

        if (remaining > 0) {
          setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
          }, remaining);
        } else {
          this.loading = false;
          this.cdr.detectChanges();
        }

      }

    });

  }

}