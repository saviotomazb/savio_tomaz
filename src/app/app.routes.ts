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
        title: 'Desenvolvedor .NET',
        data: {
          seo: {
            title: 'Desenvolvedor .NET',
            description: 'Portfólio de Sávio Tomaz, desenvolvedor .NET especializado em ASP.NET Core, Angular e arquitetura de software.',
            canonical: '/',
            robots: 'index,follow',
            image: '/assets/images/seo/og-image.webp',
            type: 'website'
          }
        }
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects.page')
            .then(m => m.ProjectsPageComponent),
        title: 'Projetos',
        data: {
          seo: {
            title: 'Projetos',
            description: 'Conheça os projetos desenvolvidos por Sávio Tomaz utilizando .NET, Angular, SQL Server, Docker e boas práticas de arquitetura.',
            canonical: '/projects',
            robots: 'index,follow',
            image: '/assets/images/seo/og-image.webp',
            type: 'website'
          }
        }
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.page')
            .then(m => m.AboutPageComponent),
        title: 'Sobre',
        data: {
          seo: {
            title: 'Sobre',
            description: 'Saiba mais sobre a trajetória, experiência e competências de Sávio Tomaz como desenvolvedor de software.',
            canonical: '/about',
            robots: 'index,follow',
            image: '/assets/images/seo/og-image.webp',
            type: 'website'
          }
        }
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact.page')
            .then(m => m.ContactPageComponent),
        title: 'Contato',
        data: {
          seo: {
            title: 'Contato',
            description: 'Entre em contato com Sávio Tomaz para oportunidades profissionais, projetos ou networking.',
            canonical: '/contact',
            robots: 'index,follow',
            image: '/assets/images/seo/og-image.webp',
            type: 'website'
          }
        }
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./features/blog/blog.page')
            .then(m => m.BlogPageComponent),
        title: 'Blog',
        data: {
          seo: {
            title: 'Blog',
            description: 'Artigos sobre desenvolvimento de software, .NET, Angular, arquitetura e tecnologia.',
            canonical: '/blog',
            robots: 'index,follow',
            image: '/assets/images/seo/og-image.webp',
            type: 'website'
          }
        }
      }
    ]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.page')
        .then(m => m.NotFoundPageComponent),
    title: '404 - Página não encontrada',
    data: {
      seo: {
        title: 'Página não encontrada',
        description: 'A página solicitada não foi encontrada.',
        canonical: '/404',
        robots: 'noindex,nofollow',
        type: 'website'
      }
    }
  }
];