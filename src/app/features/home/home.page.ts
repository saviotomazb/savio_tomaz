import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="min-h-[calc(100vh-theme(spacing.20))] flex items-center">

      <div
        class="w-full
              grid md:grid-cols-2 gap-8 lg:gap-4
              items-center"
      >

        <div class="order-2 md:order-1">

          <span class="eyebrow mb-4 block">
            Desenvolvedor
          </span>

          <h1 class="text-primary leading-[1.05] mb-6">
            Sávio Tomaz
          </h1>

          <p class="text-secondary text-lg max-w-xl mb-8">
            Desenvolvedor .NET com foco em ASP.NET Core e arquitetura de software.
            Sou guiado pela excelência técnica, comunicação e entrega de valor.
          </p>

          <div class="flex flex-wrap gap-4">

            <a
              routerLink="/projects"
              class="btn btn-primary btn-with-arrow"
            >
              Ver projetos
            </a>

            <a
              routerLink="/about"
              class="btn btn-outline btn-with-arrow"
            >
              Ler sobre mim
            </a>

          </div>

        </div>

        <div class="order-1 md:order-2 flex justify-start md:justify-center lg:justify-end">

          <img
            src="assets/images/profile/Perfil.png"
            alt="Sávio Tomaz"
            class="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-110 xl:h-110
                  object-cover rounded-2xl
                  border-default shadow-sm"
          >

        </div>

      </div>

    </section>
  `,
  host: {
    class: 'block'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {}