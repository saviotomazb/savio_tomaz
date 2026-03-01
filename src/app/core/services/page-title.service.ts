import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private readonly appName = 'Sávio Tomaz';

  constructor(private title: Title) {}

  setTitle(page?: string) {
    if (!page) {
      this.title.setTitle(this.appName);
      return;
    }

    this.title.setTitle(`${this.appName} | ${page}`);
  }
}