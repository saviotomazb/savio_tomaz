import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import type { SeoData } from '../models/seo-data.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'Sávio Tomaz';
  private readonly baseUrl = 'https://SEU-DOMINIO.com';

  update(seo: SeoData): void {

    this.updateDescription(seo.description);
    this.updateRobots(seo.robots);
    this.updateCanonical(seo.canonical);
    this.updateOpenGraph(seo);
    this.updateTwitter(seo);

  }

  private updateDescription(description?: string): void {

    if (!description) {
        return;
    }
      
    this.meta.updateTag({
      name: 'description',
      content: description
    });

  }

  private updateRobots(robots?: string): void {

    this.meta.updateTag({
      name: 'robots',
      content: robots ?? 'index,follow'
    });

  }

  private updateCanonical(canonical?: string): void {

    if (!canonical) {
        return;
    } 

    const href = `${this.baseUrl}${canonical}`;

    let link = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }

    link.href = href;

  }

  private updateOpenGraph(seo: SeoData): void {

    this.updateProperty('og:site_name', this.siteName);

    if (seo.title) {
      this.updateProperty('og:title', seo.title);
    }

    if (seo.description) {
      this.updateProperty('og:description', seo.description);
    }

    if (seo.image) {
      this.updateProperty('og:image', `${this.baseUrl}${seo.image}`);
    }

    if (seo.canonical) {
      this.updateProperty('og:url', `${this.baseUrl}${seo.canonical}`);
    }

    this.updateProperty(
      'og:type',
      seo.type ?? 'website'
    );

  }

  private updateTwitter(seo: SeoData): void {

    this.updateName('twitter:card', 'summary_large_image');

    if (seo.title) {
      this.updateName('twitter:title', seo.title);
    }

    if (seo.description) {
      this.updateName('twitter:description', seo.description);
    }

    if (seo.image) {
      this.updateName(
        'twitter:image',
        `${this.baseUrl}${seo.image}`
      );
    }

  }

  private updateProperty(property: string, content: string): void {

    this.meta.updateTag({
      property,
      content
    });

  }

  private updateName(name: string, content: string): void {

    this.meta.updateTag({
      name,
      content
    });

  }

}