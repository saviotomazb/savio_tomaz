import { Component, ChangeDetectorRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router,
  ActivatedRoute
} from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { SeoService } from '../../services/seo.service';
import type { SeoData } from '../../models/seo-data.model';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LoadingComponent
  ],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {

  loading = true;

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);
  private readonly cdr = inject(ChangeDetectorRef);

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

        this.updateSeo();

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

  private updateSeo(): void {

    let route = this.activatedRoute;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const seo = route.snapshot.data['seo'] as SeoData | undefined;

    if (seo) {
      this.seoService.update(seo);
    }

  }

}