import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Lista de Carros',
    icon: 'color-palette-outline',
    children: [
      {
        title: 'Carros',
        link: '/pages/cars/cars-list',
      }
    ],
  },
];
