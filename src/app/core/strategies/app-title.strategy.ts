import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  TitleStrategy,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {

  private readonly baseTitle = 'Sávio Tomaz';

  constructor(private title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {

    const route = this.getDeepestRoute(routerState.root);
    const pageTitle = route.data?.['title'];

    if (pageTitle) {
      this.title.setTitle(`${this.baseTitle} | ${pageTitle}`);
    } else {
      this.title.setTitle(`${this.baseTitle} | Desenvolvedor`);
    }
  }

  private getDeepestRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}