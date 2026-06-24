import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="flex flex-col items-center justify-center text-center py-20">

      <p class="eyebrow mb-4">
        404
      </p>

      <h1 class="text-primary mb-6">
        Página não encontrada
      </h1>

      <p class="text-secondary max-w-md mb-8">
        A página que você está procurando não existe ou foi movida.
      </p>

      <a
        routerLink="/"
        class="btn btn-primary btn-with-arrow cursor-pointer"
      >
        Página inicial
      </a>

    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {}