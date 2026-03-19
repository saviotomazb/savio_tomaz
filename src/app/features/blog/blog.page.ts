import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section>
      <h1 class="text-3xl font-bold">Blog</h1>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPageComponent {}