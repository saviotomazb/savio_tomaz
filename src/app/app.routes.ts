import { Routes } from '@angular/router';

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
            .then(m => m.HomePage),
        title: 'Desenvolvedor'
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects.page')
            .then(m => m.ProjectsPage),
        title: 'Projetos'
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.page')
            .then(m => m.AboutPage),
        title: 'Sobre'
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact.page')
            .then(m => m.ContactPage),
        title: 'Contato'
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./features/blog/blog.page')
            .then(m => m.BlogPage),
        title: 'Blog'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];