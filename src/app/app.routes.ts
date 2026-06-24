import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/main-layout/main-layout.component')
        .then(m => m.MainLayoutComponent),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.page')
            .then(m => m.HomePageComponent),
        title: 'Desenvolvedor .NET'
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects.page')
            .then(m => m.ProjectsPageComponent),
        title: 'Projetos'
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.page')
            .then(m => m.AboutPageComponent),
        title: 'Sobre'
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact.page')
            .then(m => m.ContactPageComponent),
        title: 'Contato'
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./features/blog/blog.page')
            .then(m => m.BlogPageComponent),
        title: 'Blog'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.page')
        .then(m => m.NotFoundPageComponent),
    title: '404 - Página não encontrada'
  }
];