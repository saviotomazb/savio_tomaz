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
            .then(m => m.HomePage)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects.page')
            .then(m => m.ProjectsPage)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.page')
            .then(m => m.AboutPage)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact.page')
            .then(m => m.ContactPage)
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./features/blog/blog.page')
            .then(m => m.BlogPage)
      }
    ]
  }
];