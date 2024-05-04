import { Route } from '@angular/router';
import { AppViewComponent } from './app-view.component';

export default [
    {
      path: '',
      component: AppViewComponent,
      children: [
        {
          path: '',
          loadComponent: () => import('./views/home/home.component').then((c) => c.HomeComponent)
        },
        {
          path: 'token-details',
          loadComponent: () =>
            import('./views/token-details/token-details.component').then((c) => c.TokenDetailsComponent),
        },
      ],
    },
    { path: '**', redirectTo: '' },
  ] as Route[];