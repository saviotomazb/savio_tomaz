import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section class="py-10 lg:py-16">
      <div>

        <div class="max-w-3xl mb-12">
          <span class="eyebrow mb-4 block">
            Blog
          </span>

          <h1 class="text-primary leading-[1.05] mb-6">
            Ideias, estudos e aprendizados sobre tecnologia
          </h1>

          <p class="text-secondary text-lg">
            Um espaço para registrar aprendizados, explorar conceitos,
            compartilhar conhecimentos e promover a evolução contínua.
          </p>
        </div>

        <div class="flex flex-wrap gap-3 mb-10">
          @for (category of plannedCategories; track category) {
            <span
              class="px-4 py-2 rounded-lg border border-zinc-200 bg-white
                     font-mono text-sm text-zinc-600"
            >
              {{ category }}
            </span>
          }
        </div>

        <div
          class="min-h-[420px] border border-dashed border-zinc-300 rounded-lg
                 flex items-center justify-center px-6 py-16 text-center"
        >
          <div class="max-w-2xl">
            <span class="font-mono text-sm text-zinc-500 block mb-4">
              Conteúdo em construção
            </span>

            <h2 class="text-3xl sm:text-4xl text-zinc-900 font-semibold tracking-tight mb-5">
              Em breve, novos artigos por aqui
            </h2>

            <p class="text-secondary text-lg mb-8">
              Este espaço reunirá conteúdos sobre desenvolvimento de software, arquitetura, boas práticas e aprendizados extraídos de projetos, desafios e experiências que contribuem para a evolução profissional e técnica.
            </p>

            <div class="inline-flex items-center gap-3 rounded-lg bg-zinc-100 px-5 py-3">
              <span class="w-2 h-2 rounded-full bg-zinc-900" aria-hidden="true"></span>
              <span class="font-mono text-sm text-zinc-600">
                Estamos trabalhando nisso
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPageComponent {
  protected readonly plannedCategories = [
    'Desenvolvimento',
    'Carreira',
    'Projetos',
    'Estudos',
    'Metodologias',
    'Ferramentas'
  ];
}
