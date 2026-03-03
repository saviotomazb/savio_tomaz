import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {

  private readonly baseTitle = 'Sávio Tomaz';
  private readonly defaultSection = 'Desenvolvedor';

  constructor(private title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {

    const routeTitle = this.buildTitle(snapshot);

    const finalTitle = routeTitle
      ? `${this.baseTitle} | ${routeTitle}`
      : `${this.baseTitle} | ${this.defaultSection}`;

    this.title.setTitle(finalTitle);
  }
}