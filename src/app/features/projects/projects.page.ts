import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="py-10 lg:py-16">
      <div>

        <div class="max-w-3xl mb-12">
          <span class="eyebrow mb-4 block">
            Projetos
          </span>

          <h1 class="text-primary leading-[1.05] mb-6">
            Soluções que transformam ideias em resultados
          </h1>

          <p class="text-secondary text-lg">
            Esta seleção reúne projetos desenvolvidos com foco em qualidade, boas práticas e escalabilidade.
          </p>
        </div>

        <div class="flex flex-wrap gap-3 mb-10">
          @for (skill of highlightedSkills; track skill) {
            <span
              class="px-4 py-2 rounded-lg border border-zinc-200 bg-white
                     font-mono text-sm text-zinc-600"
            >
              {{ skill }}
            </span>
          }
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          @for (project of projects; track project.title) {
            <article
              class="group border-default rounded-lg p-6 flex flex-col min-h-[360px]
                     transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <div class="flex items-start justify-between gap-4 mb-8">
                <span class="font-mono text-sm text-zinc-500">
                  {{ project.category }}
                </span>

                <span
                  class="px-3 py-1 rounded-full text-xs font-mono"
                  [class.bg-zinc-900]="project.status === 'Concluído'"
                  [class.text-white]="project.status === 'Concluído'"
                  [class.bg-zinc-100]="project.status !== 'Concluído'"
                  [class.text-zinc-600]="project.status !== 'Concluído'"
                >
                  {{ project.status }}
                </span>
              </div>

              <h2 class="text-2xl text-zinc-900 font-semibold tracking-tight mb-4">
                {{ project.title }}
              </h2>

              <p class="text-secondary mb-6">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mt-auto mb-6">
                @for (tech of project.technologies; track tech) {
                  <span class="px-3 py-1 rounded-md bg-zinc-100 text-zinc-600 text-sm">
                    {{ tech }}
                  </span>
                }
              </div>

              <div class="flex flex-wrap gap-3">
                <a
                  [href]="project.previewUrl"
                  class="btn btn-primary btn-with-arrow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver projeto
                </a>

                <a
                  [href]="project.repositoryUrl"
                  class="btn btn-outline btn-with-arrow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Código
                </a>
              </div>
            </article>
          }
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent {
  protected readonly highlightedSkills = [
    'Angular',
    'JWT',
    'ASP.NET Core',
    'Docker',
    'PostgreSQL',
    'SQL Server'
  ];

  protected readonly projects = [
    {
      title: 'Momentum',
      category: 'Full Stack',
      status: 'Em desenvolvimento',
      description:
        'Sistema para gerenciamento de hábitos e acompanhamento de desempenho pessoal, construído com foco em arquitetura limpa e escalabilidade.',
      technologies: ['Angular', 'ASP.NET Core Web API', 'PostgreSQL', 'Docker', 'JWT'],
      previewUrl: 'https://momentum-web-three.vercel.app/',
      repositoryUrl: 'https://github.com/saviotomazb/momentum_web'
    },
    {
      title: 'myProducts',
      category: 'Full Stack',
      status: 'Em desenvolvimento',
      description:
        'Aplicação para gestão de produtos e geração de orçamentos, permitindo o controle de clientes e categorias.',
      technologies: ['ASP.NET Core', 'Razor Pages', 'Entity Framework Core', 'SQL Server', 'JWT'],
      previewUrl: '#',
      repositoryUrl: 'https://github.com/saviotomazb/my_products'
    }
  ];
}
