import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div
      class="fixed inset-0 flex flex-col items-center justify-center
             bg-white/80 backdrop-blur-sm z-[9999]
             transition-opacity duration-300"
    >

      <img
        src="assets/images/logo/logo_dark.svg"
        alt="Logo"
        class="w-24 sm:w-28 mb-4"
      />

      <p class="font-mono text-sm text-secondary mb-4 animate-pulse">
        Carregando componentes
      </p>

      <div
        class="w-10 h-10 border-4 border-zinc-300 border-t-zinc-900
               rounded-full animate-spin">
      </div>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {}