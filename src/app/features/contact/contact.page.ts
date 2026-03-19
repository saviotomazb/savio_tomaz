import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section>
      <h1 class="text-3xl font-bold">Contact</h1>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {}