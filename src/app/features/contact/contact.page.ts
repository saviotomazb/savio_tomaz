import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="py-10 lg:py-16">
      <div>

        <div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">

          <div>
            <span class="eyebrow mb-4 block">
              Contato
            </span>

            <h1 class="text-primary leading-[1.05] mb-6">
              Vamos conversar sobre ideias, projetos e oportunidades
            </h1>

            <p class="text-secondary text-lg max-w-2xl mb-8">
              Se você quer falar sobre desenvolvimento, propor uma colaboração
              ou conhecer melhor meu trabalho, escolha um dos canais.
              Vou ficar feliz em conversar.
            </p>

            <div class="border-default rounded-lg p-6 max-w-xl">
              <span class="font-mono text-sm text-zinc-500 block mb-3">
                Disponibilidade
              </span>

              <h2 class="text-2xl text-zinc-900 font-semibold mb-3">
                Aberto a novas conexões
              </h2>

              <p class="text-secondary">
                Seja para compartilhar experiências, discutir tecnologia ou explorar novas
                oportunidades, estou sempre disponível para uma boa conversa.
              </p>
            </div>
          </div>

          <div class="grid gap-4">
            @for (contact of contactLinks; track contact.label) {
              <a
                [href]="contact.url"
                class="group border-default rounded-lg p-6 flex items-start justify-between gap-6
                       transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span class="font-mono text-sm text-zinc-500 block mb-2">
                    {{ contact.label }}
                  </span>

                  <h2 class="text-2xl text-zinc-900 font-semibold mb-3">
                    {{ contact.title }}
                  </h2>

                  <p class="text-secondary">
                    {{ contact.description }}
                  </p>
                </div>

                <span
                  class="card-arrow transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                </span>
              </a>
            }
          </div>

        </div>

        <div class="grid md:grid-cols-3 gap-4 mt-12">
          @for (item of contactHighlights; track item.title) {
            <div class="border-default rounded-lg p-5">
              <span class="font-mono text-sm text-zinc-500 block mb-2">
                {{ item.label }}
              </span>

              <h2 class="text-xl text-zinc-900 font-semibold mb-2">
                {{ item.title }}
              </h2>

              <p class="text-secondary">
                {{ item.description }}
              </p>
            </div>
          }
        </div>

        <div
          class="mt-12 bg-zinc-900 text-white rounded-lg p-6 md:p-8
                 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <span class="font-mono text-sm text-zinc-400 block mb-3">
              Próximo passo
            </span>

            <h2 class="text-2xl md:text-3xl font-semibold mb-3">
              Vamos conversar?
            </h2>

            <p class="text-zinc-300 max-w-2xl">
              Seja para discutir oportunidades, compartilhar conhecimento,
              colaborar com pessoas inspiradoras ou contribuir para projetos
              com propósito.
            </p>
          </div>

          <a
            href="mailto:saviotomaz_@hotmail.com"
            class="btn bg-white text-zinc-900 hover:bg-zinc-200 btn-with-arrow"
          >
            Enviar e-mail
          </a>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  protected readonly contactLinks = [
    {
      label: 'E-mail',
      title: 'Envie uma mensagem',
      description:
        'O melhor canal para conversar sobre oportunidades, projetos ou qualquer assunto que mereça uma conversa mais detalhada.',
      url: 'mailto:saviotomaz_@hotmail.com'
    },
    {
      label: 'LinkedIn',
      title: 'Conecte-se comigo',
      description:
        'Acompanhe minha trajetória profissional, experiências, estudos e participe da minha rede de conexões.',
      url: 'https://www.linkedin.com/in/saviotomazb'
    },
    {
      label: 'GitHub',
      title: 'Veja meus repositórios',
      description:
        'Conheça os projetos, experimentos e soluções que desenvolvo para evoluir continuamente como profissional.',
      url: 'https://github.com/saviotomazb'
    }
  ];

  protected readonly contactHighlights = [
    {
      label: 'Comunicação',
      title: 'Contato transparente',
      description: 'Valorizo conversas claras, alinhamento de expectativas e respostas objetivas.'
    },
    {
      label: 'Foco',
      title: 'Projetos',
      description: 'Aplicações que utilizam tecnologia para resolver problemas e gerar valor.'
    },
    {
      label: 'Evolução',
      title: 'Aprendizado contínuo',
      description: 'Estou sempre em busca de novos conhecimentos, boas práticas e oportunidades de crescimento.'
    }
  ];
}
