import { Routes } from '@angular/router';
import { HomePage } from './buguerKing/pages/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'category',
    loadComponent: () => import('./buguerKing/pages/menu-category/menu-category'),
  },
];
