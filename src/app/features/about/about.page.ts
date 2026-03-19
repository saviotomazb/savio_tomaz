import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section>
      <h1 class="text-3xl font-bold">About</h1>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {}