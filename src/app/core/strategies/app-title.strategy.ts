import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import type { RouterStateSnapshot } from '@angular/router';
import { TitleStrategy } from '@angular/router';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {

  private readonly title = inject(Title);

  private readonly baseTitle = 'Sávio Tomaz';
  private readonly defaultSection = 'Desenvolvedor';

  override updateTitle(snapshot: RouterStateSnapshot): void {

    const routeTitle = this.buildTitle(snapshot);

    const finalTitle = routeTitle
      ? `${this.baseTitle} | ${routeTitle}`
      : `${this.baseTitle} | ${this.defaultSection}`;

    this.title.setTitle(finalTitle);
  }
}