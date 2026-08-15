import { Component, signal } from '@angular/core';
import { MenuCard } from '../../components/menu-card/menu-card';
import { MenuItem } from '../../interfaces/MenuItem';

const MENU_ITEMS: MenuItem[] = [
  {
    img: '/menu/combosParrilla.png',
    title: 'Combos Parrilla',
  },
  {
    img: '/menu/combosPollo.png',
    title: 'Combos Pollo',
  },
  {
    img: '/menu/acompaniamiento.png',
    title: 'Acompañamientos',
  },
  {
    img: '/menu/cupones.png',
    title: 'Cupones',
  },
  {
    img: '/menu/ensaladas.png',
    title: 'Ensaladas',
  },
  {
    img: '/menu/hamburguesasSueltas.png',
    title: 'Hamburguesas Sueltas',
  },
  {
    img: '/menu/kingDuo.png',
    title: 'King Dúo',
  },
  {
    img: '/menu/kingJr.png',
    title: 'King Jr.',
  },
  {
    img: '/menu/postres.png',
    title: 'Postres',
  },
  {
    img: '/menu/promos.png',
    title: 'Promos',
  },
];

@Component({
  selector: 'app-home-page',
  imports: [MenuCard],
  templateUrl: './home-page.html',
})
export class HomePage {
  menuItems = signal<MenuItem[]>(MENU_ITEMS);
}
