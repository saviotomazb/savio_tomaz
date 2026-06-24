import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="py-10 lg:py-16">
      <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">

        <div class="order-2 lg:order-1">
          <div class="relative max-w-md mx-auto lg:mx-0">
            <img
              src="assets/images/profile/Formatura.png"
              alt="Foto de Sávio Tomaz em sua formatura"
              class="aspect-[4/5] w-full object-cover rounded-2xl border-default shadow-sm"
            >
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <span class="eyebrow mb-4 block">
            Sobre mim
          </span>

          <h1 class="text-primary leading-[1.05] mb-6">
            Um pouco sobre minha história
          </h1>

          <div class="space-y-5 text-secondary text-lg max-w-2xl">
            <p>
              Acredito que o desenvolvimento de software vai além da escrita de
              código. Para mim, construir soluções eficientes significa compreender
              o problema, entender as necessidades do negócio e transformar requisitos
              em algo simples, claro, escalável e sustentável ao longo do tempo.
            </p>

            <p>
              Tenho interesse por arquitetura e qualidade de software, buscando criar
              soluções de fácil manutenção e alinhadas às melhores práticas de acordo
              com cada contexto. Também valorizo a melhoria contínua dos processos,
              procurando identificar oportunidades que gerem mais eficiência e resultados.
            </p>

            <p>
              Da mesma forma que a excelência técnica, considero a comunicação uma habilidade
              fundamental. Entender pessoas, alinhar expectativas e colaborar de forma clara
              são aspectos essenciais para que a tecnologia entregue valor real.
            </p>

            <p>
              Estou em constante evolução, buscando crescer não apenas como profissional, mas
              também como alguém capaz de gerar impacto por meio das soluções que desenvolve.
            </p>
          </div>

        </div>

        <div class="order-3 lg:col-start-2">
          <div class="grid sm:grid-cols-3 gap-4 max-w-2xl">
            <div class="border-default rounded-lg p-5">
              <span class="font-mono text-sm text-zinc-500 block mb-2">
                Foco
              </span>
              <p class="text-zinc-900 font-medium leading-snug">
                Soluções eficientes
              </p>
            </div>

            <div class="border-default rounded-lg p-5">
              <span class="font-mono text-sm text-zinc-500 block mb-2">
                Objetivo
              </span>
              <p class="text-zinc-900 font-medium leading-snug">
                Impacto real
              </p>
            </div>

            <div class="border-default rounded-lg p-5">
              <span class="font-mono text-sm text-zinc-500 block mb-2">
                Evolução
              </span>
              <p class="text-zinc-900 font-medium leading-snug">
                Aprendizado contínuo
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {}
